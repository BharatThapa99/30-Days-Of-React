export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
      <div className="flex items-center mb-4">
    <input id={id} type="checkbox" value="" 
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    checked={completed}
    onChange={e => toggleTodo(id, e.target.checked)}
      />
    <label htmlFor={id}
    className="ms-2 text-sm font-medium text-gray-900">
      {title}</label>
</div>
      
          
     
    )
  }