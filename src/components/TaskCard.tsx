import React from "react"
import { Task } from "../interfaces/supabase.interface"
import { useTaskCard } from "../hooks/useTaskCard";

export const TaskCard = ({ id, title, summary, isCompleted }: Task) => {
    const { role, isChecked, onToggleChange, openEdit } = useTaskCard(isCompleted);

    return (
        <div className="flex justify-between bg-slate-50 p-3">
            {role === 'EMPLOYEE' && <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input defaultChecked={isChecked} id="isCompleted" onChange={() => onToggleChange(id)} aria-describedby="isCompleted" type="checkbox" name="isCompleted" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                </div>
            </div>}
            <div className={`flex gap-2  items-start justify-start w-full ${isCompleted && 'line-through'}`}>
                <p> {title} / isCompleted: {JSON.stringify(isChecked)}</p>
                <p>{summary}</p>
            </div>
            {role === 'MANAGER' && <div className="flex gap-2">
                <button onClick={() => openEdit(id)}>Edit</button>
            </div>}
        </div>
    )
}
