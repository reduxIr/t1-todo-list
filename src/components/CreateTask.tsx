import { useState } from "react";
import CreateModal from "./CreateModal";

const CreateTask = () => {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false)

  return (
    <div className="content-center text-center ">
      <button 
      className="rounded-2xl border w-55 h-15 hover:bg-neutral-100 hover:border-2 focus:bg-neutral-100 focus:border-2" 
      onClick={() => setIsModalOpen(true)}
      >
        <span className="font-mono text-xl">Create new task</span>
      </button>
      {isModalOpen && <CreateModal handleCancel={() => setIsModalOpen(false)}/>}
    </div>
    
  )
}

export default CreateTask;
