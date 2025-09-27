
interface ISortingSection {
  handleChange: (key: string, value: string) => void;
}
// ЗДЕСЬ НАДО ДОБАВИТЬ КРЕСТИК ПРИ НАЖАТИИ НА КОТОРЫЙ В СОРТИРОВКЕ МЫ ВЫЗЫВАЕМ handleChange('нужный пункт', '') <- передаем пустую строку 
const SotringSection = ({ handleChange }: ISortingSection) => {
  const classes = 'border border-gray-400 rounded font-mono cursor-pointer w-45 h-8 text-left hover:ring-1 hover:ring-gray-500 hover:border-transparent transition duration-300'
  return (
    <div className="text-center mt-4">
      <label className='m-2'>
        <select
          className={classes}
          name="category"  
          onChange={(e) => handleChange('category', e.target.value)}
        >
          <option value="" selected disabled hidden>Select category</option>
          <option value="Bug">Bug</option>
          <option value="Feature">Feature</option>
          <option value="Documentation">Documentation</option>
          <option value="Refactor">Refactor</option>
          <option value="Test">Test</option>
        </select>
      </label>
      <label className='m-2'>
        <select
          className={classes}
          name="status"  
          onChange={(e) => handleChange('status', e.target.value)}
        >
          <option value="" selected disabled hidden>Select status</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </label>
      <label className='m-2'>
        <select
          className={classes}
          name="priority"  
          onChange={(e) => handleChange('priority', e.target.value)}
        >
          <option value="" selected disabled hidden>Select priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>
    </div>
  )
}

export default SotringSection;