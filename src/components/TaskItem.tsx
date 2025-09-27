import { useState } from "react";
import type { Task } from "../types/types";
import EditModal from "./EditModal";
import { useDeleteTask, useUpdateTask } from "../store/taskStore";

interface ITaskItem {
  task: Task;
}

const TaskItem: React.FC<ITaskItem> = ({ task }) => {

  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [editedTask, setEditedTask] = useState<Task>(task);
  const [isHovered, setIsHovered] = useState<Boolean>(false);

  function toggleModal() {
    setIsModalOpen(prev => !prev);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const {name, value} = e.target;
    setEditedTask(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSave = () => {
    useUpdateTask(editedTask.id, editedTask)
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setEditedTask(task);
    setIsModalOpen(false)
  }

  return (
    <div  
    className={'flex flex-col m-5 w-80 h-57 border rounded-lg hover:bg-neutral-100 hover:ring-1 focus:bg-neutral-100 transition-all duration-300'}
    onClick={() => toggleModal()}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <div className="flex ">
          <h2 className='text-xl font-semibold text-center mt-1 font-mono basis-xl'>{task.title}</h2>
          { isHovered && 
          <button 
          title="Delete task" 
          onClick={() => useDeleteTask(task.id)}
          className="relative rounded-full w-12 m-1 cursor-pointer
             overflow-hidden group
             transition-all duration-300"
          >
            <div 
            className="
              absolute inset-0 bg-neutral-300/80
              scale-0 group-hover:scale-105 
              transition-transform duration-300 ease-out
              origin-center rounded-full">
            </div>
            <svg
            className="relative z-10 transition-colors duration-200"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            >
              <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"/>
            </svg>
          </button>}
        </div>
        <hr className="w-full mt-0 mx-auto m-1" />
      </div>
      <div>
        <p className='w-75 h-30 m-1 text-wrap font-mono'>{task.description}</p>
        <hr className="w-full mx-auto" />
      </div>
      <div>
        <div className='flex justify-between h-5 m-2'>
          <div className='border rounded-2xl flex items-center justify-center'>
            <span className='m-2 text-sm font-mono'>{task.category}</span>
          </div>
          <div className='border rounded-2xl flex items-center justify-center'>
            <span className='m-2 text-sm font-mono'>{task.status}</span>
          </div>
          <div className='border rounded-2xl flex items-center justify-center'>
            <span className='m-2 text-sm font-mono'>{task.priority}</span>
          </div>
        </div>
      </div>
      {isHovered && 
        <div>
          <hr className="w-30 mt-0.5 border-gray-400"/>
          <p className= "text-gray-300 font-[Orbitron] ml-1 text-sm">Click to edit</p>
        </div>
      }
      {isModalOpen && <EditModal task={editedTask} handleInputChange={handleInputChange} handleSave={handleSave} handleCancel={handleCancel}/>}
    </div>
  )
}

export default TaskItem;