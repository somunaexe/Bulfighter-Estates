import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import multer from "multer"
import User from "../models/User.js"
import path from "path"

const router = express.Router()

//Setting up Multer for file upload
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "public/uploads/") //Storing the uploaded files in this folder
    },
    filename: function(req, file, cb){
        const ext = path.extname(file.originalname); // Get the file extension
        cb(null, `${file.originalname}-${Date.now()}${ext}`); // Set the new filename
    }
})

const upload = multer({storage})

//User Registration
router.post("/register", upload.single("profileImage"), async (req,res)=>{
    try {
        const { firstName, lastName, email, password } = req.body
        const profileImage = req.file

        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(409).json({message:"User already exists!"})
        }

        if(!profileImage){
            return res.status(400).send("No file uploaded")
        }

        const profileImagePath = profileImage.path

        //Hashing the password
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        //Creating a new User
        const newUser = new User({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            profileImagePath,
        })

        await newUser.save()
        res.status(200).json({message: "User registration successful", user: newUser })
    } catch (err) {
       console.log(err)
       res.status(500).json({message:"User registration failed", error:err.message}) 
    }
})

export default router