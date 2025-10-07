import { useState } from "react";

interface ISortingSection {
  handleChange: (key: string, value: string) => void;
  filters: {
    category: string,
    status: string, 
    priority: string,
  }
}

const SotringSection = ({ handleChange, filters }: ISortingSection) => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const classes = 'appearance-none border border-gray-400 rounded font-mono cursor-pointer w-45 h-8 text-left transition-all duration-300 p-1 active:ring-1 active:ring-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500'

  const handleMouseEnter = (field: string) => {
    setIsHovered(field);
  }
  const handleMouseLeave = () => {
    setIsHovered(null);
  }

  return (
    <div className="text-center mt-4">
      <label className='m-2 relative' onMouseEnter={() => handleMouseEnter('category')} onMouseLeave={() => handleMouseLeave()}>
        <button 
          className="absolute flex justify-center items-center m-1 h-5 w-5 text-center cursor-pointer transition duration-300 -top-0.5 right-0.5" 
          onClick={() => handleChange('category', '')}
          onMouseEnter={() => handleMouseEnter('category')}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={14} 
            height={14} 
            viewBox="0 0 24 24"
          >
            <path fill="#000000" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/>
          </svg> 
        </button>
        <select
          className={isHovered === 'category' ? `${classes} ring-1 ring-gray-500 border-transparent` : `${classes}`}
          name="category"  
          value={filters.category}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          <option value="" disabled hidden>Select category</option>
          <option value="Bug">Bug</option>
          <option value="Feature">Feature</option>
          <option value="Documentation">Documentation</option>
          <option value="Refactor">Refactor</option>
          <option value="Test">Test</option>
        </select>
      </label>
      <label className='m-2 relative' onMouseEnter={() => handleMouseEnter('status')} onMouseLeave={() => handleMouseLeave()}>
        <button 
          className="absolute flex justify-center items-center m-1 h-5 w-5 text-center cursor-pointer transition duration-300 -top-0.5 right-0.5" 
          onClick={() => handleChange('status', '')}
          onMouseEnter={() => handleMouseEnter('status')}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={14} 
            height={14} 
            viewBox="0 0 24 24"
          >
            <path fill="#000000" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/>
          </svg> 
        </button>
        <select
          className={isHovered === 'status' ? `${classes} ring-1 ring-gray-500 border-transparent` : `${classes}`}
          name="status"  
          value={filters.status}
          onChange={(e) => handleChange('status', e.target.value)}
        >
          <option value="" disabled hidden>Select status</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </label>
      <label className='m-2 relative' onMouseEnter={() => handleMouseEnter('priority')} onMouseLeave={() => handleMouseLeave()}>
        <button 
          className="absolute flex justify-center items-center m-1 h-5 w-5 text-center cursor-pointer transition duration-300 -top-0.5 right-0.5" 
          onClick={() => handleChange('priority', '')}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={14} 
            height={14} 
            viewBox="0 0 24 24"
          >
            <path fill="#000000" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/>
          </svg> 
        </button>
        <select
          className={isHovered === 'priority' ? `${classes} ring-1 ring-gray-500 border-transparent` : `${classes}`}
          name="priority"
          value={filters.priority} 
          onChange={(e) => handleChange('priority', e.target.value)}
        >
          <option value="" disabled hidden>Select priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
    </div>
  )
}

export default SotringSection;
