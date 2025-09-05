import type { Task } from "../types/types";
import TaskItem from "./TaskItem";

interface ITaskList {
  taskList: Task[];
}

const TaskList: React.FC<ITaskList> = ({ taskList }) => {
  return (
    <div className= "flex flex-col justify-center">
      <div className="flex flex-wrap justify-center">
        {taskList.map((task) => (
          <TaskItem key={task.id} task={task}/>
        ))}
      </div>
    </div>
  )
}

export default TaskList;