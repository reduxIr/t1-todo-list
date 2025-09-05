import { create, type StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { Task } from "../types/types";

// Интерфейс для начального состояния
interface IInitiasState {
  taskList: Task[];
}

// Интерфейс для Actions 
interface IActions {
  updateTask: (id: number, updatedTask: Task) => void;
  deleteTask: (id: number) => void;
  createTask: (task: Omit<Task, 'id'>) => void;
}

// Константа для начального состояния
const initialState: IInitiasState = {
  taskList: []
}  

interface ITasksStore extends IInitiasState, IActions {}

const TasksStore: StateCreator<
  ITasksStore,
  [["zustand/devtools", never], ["zustand/persist", unknown]]
> = (set) => ({
  ...initialState, 

  updateTask: (id, updatedTask) => {
    set((state) => ({
      taskList: state.taskList.map(task => 
        task.id === id ? { ...updatedTask } : task
      )
    }),
    false, 
    'updateTask');
  },

  deleteTask: (id: number) => {
    set((state) => ({
      taskList: state.taskList.filter(task => task.id !== id)
    }),
    false,
    'deleteTask');
  },

  createTask: (task) => {
    set((state) => {
      const newId = state.taskList.length > 0 ? Math.max(...state.taskList.map(t => t.id)) + 1 : 1;
      return {
        taskList: [...state.taskList, {...task, id: newId}]
      }
    },
    false,
    'createTask'
  )
  }
})

const useTasksStore = create<ITasksStore>()(
  devtools(
    persist(TasksStore, {
      name: 'taskList',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({taskList: state.taskList})
    }
    )
  )
)

// Селекторы 
export const useTaskList = () => useTasksStore((state) => state.taskList);
export const useUpdateTask = (id: number, updatedTask: Task) => useTasksStore.getState().updateTask(id, updatedTask);
export const useDeleteTask = (id: number) => useTasksStore.getState().deleteTask(id);
export const useCreateTask = (task: Omit<Task, 'id'>) => useTasksStore.getState().createTask(task);




