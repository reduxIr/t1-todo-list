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
  })
  const [filtersTasks, setFiltersTasks] = useState<Task[]>(taskList)

  const handleChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }
  useEffect(() => {
    console.log(filters)
  }, [filters])
  return (
    <>
      <Header/>
      <CreateTask/>
      <SotringSection handleChange={handleChange}/>
      <TaskList taskList={filtersTasks}/>
    </>
  )
}

export default App
