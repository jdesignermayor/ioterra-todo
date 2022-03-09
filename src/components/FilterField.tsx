import React from "react"

import { useNavigate } from "react-router-dom";
import { BsPlusSquare, BsFilterCircle } from "react-icons/bs";

export const FilterField = (props: any) => {
    const nav = useNavigate();

    const handleCreate = () => {
        nav("/create");
    }

    return (
        <div className="grid gap-2">
            <p>Find by title</p>
            <div>
                <input onChange={(event) => props.parentCallback(event)} className="w-full p-3 border rounded-md active:shadow-lg focus:shadow-lg" type="text" placeholder="Find your task" />
            </div>
            <div className="flex justify-between gap-2">
                <button className="w-full bg-white text-black border p-2 hover:bg-slate-200 active:ring-4 cursor-pointer rounded-md flex gap-2 justify-center items-center" onClick={(event) => props.parentCallbackClear(event)}><BsFilterCircle />Clear filter</button>
                <button className="w-full bg-black text-white p-2 hover:opacity-80 active:ring-4 cursor-pointer rounded-md flex gap-2 justify-center items-center" onClick={handleCreate}><BsPlusSquare />Create new task</button>
            </div>
        </div>
    )
}
