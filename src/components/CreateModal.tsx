import { useEffect, useState } from "react";
import { useCreateTask } from "../store/taskStore";
import type { Task } from "../types/types";

interface ICreateModal {
  handleCancel: () => void;
}

interface ITaskData extends Omit<Task, 'id'> {}

const CreateModal = ({ handleCancel }: ICreateModal) => {
  const createTask = useCreateTask;
  const [taskData, setTaskData] = useState<ITaskData>({
    title: '',
    description: '',
    category: '',
    status: '',
    priority: ''
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCancel();
      if (e.key === 'Enter') handleCreate(taskData);
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleCancel, taskData]);

  const handleCreate = (taskData: ITaskData) => {
    if (!taskData.title.trim() || !taskData.category || !taskData.status || !taskData.priority) {
      alert('All required fields must be filled in');
    } else {
      createTask(taskData);
      handleCancel();
    } 
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setTaskData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div 
    className ="z-20 fixed inset-0 border backdrop-blur-sm bg-neutral-300/30 flex justify-center items-center"
    onClick={() => handleCancel()}
    >
      <div 
      className='border rounded-xl w-1/2 h-1/2 bg-neutral-100 p-4 flex flex-col'
      onClick={(e) => e.stopPropagation()}
      >
        <h2 className='text-xl font-mono text-center m-2 text-black'>Create task</h2>
        <label>
          <p className='font-mono text-left m-1'>Title:<b className='text-red-500 text-xs'>*</b></p>
          <input
            className='font-mono border border-gray-400 w-full h-8 rounded p-2 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
            placeholder='Enter title'
            maxLength={27}
            type='text'
            name='title'
            onChange={handleInputChange}
          />
        </label>

        <label>
          <p className='font-mono text-left m-1'>Description:</p>
          <input
            className='font-mono border border-gray-400 w-full h-8 rounded p-2 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
            placeholder='Enter description(optional)'
            type='text'
            name='description'
            onChange={handleInputChange}
          />
        </label>

        <label>
          <p className='font-mono text-left m-1'>Category:<b className='text-red-500 text-xs'>*</b></p>
          <select
            className='
            font-mono w-full h-8 p-1 cursor-pointer border border-gray-400
            rounded outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
            name='category'
            onChange={handleInputChange}
          >
            <option value="" selected disabled hidden>Select category</option>
            <option value='Bug'>Bug</option>
            <option value='Feature'>Feature</option>
            <option value='Documentation'>Documentation</option>
            <option value='Refactor'>Refactor</option>
            <option value='Test'>Test</option>
          </select>
        </label>

        <label>
          <p className='font-mono text-left m-1'>Status:<b className='text-red-500 text-xs'>*</b></p>
          <select
            className='font-mono w-full h-8 p-1 cursor-pointer border border-gray-400 rounded outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
            name='status'
            onChange={handleInputChange}
          >
            <option value="" selected disabled hidden>Select status</option>
            <option value='To Do'>To Do</option>
            <option value='In Progress'>In Progress</option>
            <option value='Done'>Done</option>
          </select>
        </label>

        <label>
          <p className='font-mono text-left m-1'>Priority:<b className='text-red-500 text-xs'>*</b></p>
          <select
            className='
            font-mono w-full h-8 p-1 cursor-pointer border border-gray-400
            rounded outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent'
            name='priority'
            onChange={handleInputChange}
          >
            <option value="" selected disabled hidden>Select priority</option>
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
          </select>
        </label>

        <div className='flex m-1 mt-auto justify-between font-mono '>
          <button 
          className='bg-neutral-300 rounded w-22 h-9 hover:bg-neutral-400 transition-color duration-300 ease-in-out cursor-pointer' 
          onClick={handleCancel}
          >
            <span>Cancel</span>
          </button>

          <button 
          className='bg-neutral-300 rounded w-20 h-9 hover:bg-neutral-400 transition-color duration-300 ease-in-out cursor-pointer'
          onClick={() => handleCreate(taskData)}
          >
            <span>Create</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateModal