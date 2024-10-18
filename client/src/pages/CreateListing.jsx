import React , { useState } from 'react'
import { categories, facilities, types } from "../assets/data"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { BiTrash } from 'react-icons/bi'
import { IoIosImages } from "react-icons/io"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaMinus, FaPlus } from "react-icons/fa6"
import Header from "../components/Header"

const CreateListing = () => {
  return (
    <>
        <Header />
        <section>
            <h3 className='h3'>Add Property</h3>
            <form action="">
                <h4>Describe Your Property</h4>
                {/* Categories container */}
                <div className='hide-scrollbar flex gap-x-1 bg-white ring-1 ring-slate-400/5 shadow-sm rounded-full px-2 py-3 overflow-x-auto mb-16'>
                    {categories.map((category) => (
                        <div 
                            key={category.label} 
                            className='flexCenter flex-col gap-2 p-2 rounded-xl cursor-pointer min-w-24 xl:min-w-32'
                            style={{flexShrink: 0}} //to Prevent Shrinking
                        >
                            <div 
                                className='text-secondary rounded-full h-10 w-10 p-2 flexCenter text-lg'
                                style={{backgroundColor: `${category.color}`}}
                            >
                                {category.icon}</div>
                            <p className='medium-14'>{category.label}</p>
                        </div>
                    ))}
                </div>
            </form>
        </section>
    </>
  )
}

export default CreateListing