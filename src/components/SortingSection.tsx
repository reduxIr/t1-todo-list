
interface ISortingSection {
  handleChange: (key: string, value: string) => void;
}

const SotringSection = ({ handleChange }: ISortingSection) => {
  return (
    <div className="text-center mt-4">
      <label>
        <select
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
      <label>
        <select
          name="status"  
          onChange={(e) => handleChange('status', e.target.value)}
        >
          <option value="" selected disabled hidden>Select status</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </label>
      <label>
        <select
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