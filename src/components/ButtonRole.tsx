import React from "react"
import { Role } from "../interfaces/supabase.interface"
import { onSignIn } from "../features/todo/todoSlice";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { BsFillArrowRightCircleFill } from "react-icons/bs";


export const ButtonRole = ({ id, name }: Role) => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    const handleCLick = (name: string) => {
        dispatch(onSignIn(name));
        nav("/todos");
    }

    return (
        <div onClick={() => handleCLick(name)} className="w-full flex items-center  bg-black text-white p-2 hover:opacity-80 active:ring-4 cursor-pointer rounded-md">
           <BsFillArrowRightCircleFill className="mr-2" />WIDTH A {name}
        </div>
    )
}
