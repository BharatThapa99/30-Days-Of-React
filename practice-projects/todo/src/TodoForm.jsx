import { useState } from "react"



export function TodoForm({ onSubmit}) {
    const [newItem, setNewItem] =  useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        
        onSubmit(newItem)
    
        setNewItem("")
      }

    return <>
    <form onSubmit={handleSubmit} action="" className="new-item-fomr text-center">
        <div className="form-row">
          <label htmlFor="item" className="block text-lg font-medium leading-6 text-gray-900 mt-5">Add New Item</label><br/>
           <input  value={newItem} onChange={e => setNewItem(e.target.value)} type="text" name="" id="item" className="w-2/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        
          <button type="submit" class="rounded-md ml-5 p-4 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add</button>
        
        </div>
      </form>
      </>
}