import { useEffect, useState } from 'react';
import CreateTask from './components/CreateTask';
import Header from './components/Header';
import SotringSection from './components/SortingSection';
import TaskList from './components/TaskList';
import { useTaskList } from './store/taskStore';
import './styles/app.css';
import type { Task } from './types/types';

function App() {
  const taskList = useTaskList()

  const [filters, setFilters] = useState({
    category: '',
    status: '', 
    priority: '',
  });

  const [filteredTasks, setFilteredTasks] = useState<Task[]>(taskList)

  const handlesSortingChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }
  useEffect(() => {
    let filteredTasks = taskList;
    Object.entries(filters).forEach(([key, value]) => {
      if(value !== '') {
        filteredTasks = filteredTasks.filter((el) => el[key as keyof Task] === value)
      }
    });
    setFilteredTasks(filteredTasks);
  }, [filters, taskList])
  
  return (
    <>
      <Header/>
      <CreateTask/>
      <SotringSection handleChange={handlesSortingChange}/>
      <TaskList taskList={filteredTasks}/>
    </>
  )
}

export default App
