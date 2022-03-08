import React from "react"

import { useNavigate } from "react-router-dom";

export const FilterField = () => {
    const nav = useNavigate();

    const handleCreate = () => {
        nav("/create");
    }

    return (
        <div className="grid gap-2">
            <div>
                <input className="w-full  p-3 border rounded-md active:shadow-lg focus:shadow-lg" type="text" placeholder="Find your task" />
            </div>
            <div className="flex justify-between gap-2">
                <button className="w-full bg-black text-white p-2 hover:opacity-80 active:ring-4 cursor-pointer rounded-md" onClick={handleCreate}>Create new task</button>
            </div>
        </div>
    )
}
