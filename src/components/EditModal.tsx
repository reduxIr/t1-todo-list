
import { useEffect } from "react";
import type { Task } from "../types/types";

interface IEditModal {
  task: Task;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSave: () => void;
  handleCancel: () => void;
}

const EditModal: React.FC<IEditModal> = ({ task, handleInputChange, handleSave, handleCancel }) => {
   useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleCancel();
            if (e.key === 'Enter') handleSave();
         }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleCancel, handleSave]);
    return (
        <div className = 'fixed inset-0 border backdrop-blur-sm bg-neutral-300/30 flex justify-center items-center z-20'>
            <div className='border rounded-xl w-1/2 h-1/2 bg-neutral-100 p-4 flex flex-col'
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className='text-xl font-mono text-center m-2 text-black'>Edit task</h2>
                <label className='m-0.5'>
                    <p className='font-mono'>Title:<b className='text-red-500 text-xs'>*</b></p>
                    <input
                        className='font-mono border border-gray-400 w-full h-8 rounded p-2 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
                        placeholder='Enter title'
                        maxLength={27}
                        type='text'
                        name='title'
                        value={task.title}
                        onChange={handleInputChange}
                    />
                </label>

                <label className='m-0.5'>
                    <p className='font-mono'>Description: </p>
                    <input
                        className='font-mono border border-gray-400 w-full h-8 rounded p-2 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
                        placeholder='Enter description(optional)'
                        type='text'
                        name='description'
                        value={task.description || ''}
                        onChange={handleInputChange}
                    />
                </label>

                <label className='m-0.5'>
                    <p className='font-mono'>Category:<b className='text-red-500 text-xs'>*</b></p>
                    <select
                        className='
                        font-mono w-full h-8 p-1 cursor-pointer border border-gray-400
                        rounded outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
                        name='category'
                        value={task.category}       
                        onChange={handleInputChange}
                    >
                        <option value='Bug'>Bug</option>
                        <option value='Feature'>Feature</option>
                        <option value='Documentation'>Documentation</option>
                        <option value='Refactor'>Refactor</option>
                        <option value='Test'>Test</option>
                    </select>
                </label>

                <label className='m-0.5'>
                    <p>Status:<b className='text-red-500 text-xs'>*</b></p>
                    <select
                        className='
                        font-mono w-full h-8 p-1 cursor-pointer border border-gray-400
                        rounded outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
                        name='status'
                        value={task.status}
                        onChange={handleInputChange}
                    >
                        <option value='To Do'>To Do</option>
                        <option value='In Progress'>In Progress</option>
                        <option value='Done'>Done</option>
                    </select>
                </label>

                <label className='m-0.5'>
                    <p className='font-mono'>Priority:<b className='text-red-500 text-xs'>*</b></p>
                    <select
                        className='
                        font-mono w-full h-8 p-1 cursor-pointer border border-gray-400
                        rounded outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
                        name='priority'
                        value={task.priority}
                        onChange={handleInputChange}
                    >
                        <option value='Low'>Low</option>
                        <option value='Medium'>Medium</option>
                        <option value='High'>High</option>
                    </select>
                </label>

                <div className='flex m-1 mt-auto justify-between font-mono '>
                    <button 
                    className='bg-neutral-300 rounded w-22 h-9 hover:bg-neutral-400 transition-color duration-300 ease-in-out cursor-pointer' 
                    onClick={handleCancel}>
                        <span>Cancel</span></button>
                    <button 
                    className='bg-neutral-300 rounded w-20 h-9 hover:bg-neutral-400 transition-color duration-300 ease-in-out cursor-pointer'
                    onClick={handleSave}>
                    <span>Save</span></button>
                </div>
            </div>
        </div>
    )
}

export default EditModal;