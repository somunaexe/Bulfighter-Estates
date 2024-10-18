import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import CreateListing from "./pages/CreateListing"

export default function App() {
  return (
    <BrowserRouter>
    <div className="text-[#404040] bg-primary">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/create-listing" element={<CreateListing />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}