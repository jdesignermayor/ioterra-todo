import React from "react"
import { useTaskCreate } from "../hooks/useTaskCreate";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const Create = () => {
  const { onHandleSubmit, onHandleChange, onToggleChange, onNavToHome, isSubmitting } = useTaskCreate();

  return (
    <div >
      <form onSubmit={onHandleSubmit} className="flex flex-col items-center justify-center pt-5 px-4 md:px-20 xl:px-40">
        <div className="grid gap-3 w-full md:w-3/5">
          <p className="font-bold text-2xl flex gap-2 items-center" ><button type="button" onClick={onNavToHome}><BsFillArrowLeftCircleFill /></button> Create task </p>
          <div className="grid gap-2">
            <input className="p-2 bg-slate-50 border rounded-md w-full" placeholder="Title task" type="text" id="title" name="title" onChange={onHandleChange} required />
          </div>
          <div className="grid gap-2">
            <textarea className="p-2 bg-slate-50 border rounded-md w-full" placeholder="Your task summary" id="summary" name="summary" onChange={onHandleChange} required></textarea>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="isCompleted" aria-describedby="isCompleted" type="checkbox" name="isCompleted" onChange={onToggleChange} className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="isCompleted" className="font-medium text-gray-900">is completed</label>
            </div>
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full bg-black text-white p-2 hover:opacity-80 active:ring-4 cursor-pointer rounded-md">{isSubmitting ? 'Creating tasks ...' : 'Create task'}</button>
        </div>
      </form>
    </div>
  )
}
