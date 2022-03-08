import React from "react"
import { useParams } from "react-router-dom";
import { useEdit } from "../hooks/useEdit";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const Edit = () => {
  const { id } = useParams();
  const { onHandleSubmit, onHandleChange, onNavToHome, isSubmitting, isFormReady, detail } = useEdit(id);

  return (
    <div>
      <form onSubmit={onHandleSubmit} className="flex flex-col items-center justify-center pt-5 px-4 md:px-20 xl:px-40">
        <div className="grid gap-3 w-full md:w-3/5">
          <p className="font-bold text-2xl flex gap-2 items-center"><button type="button" onClick={onNavToHome}><BsFillArrowLeftCircleFill /></button> Edit task </p>
          <div className="grid gap-2">
            <input disabled={isFormReady} className="p-2 bg-slate-50 border rounded-md w-full" placeholder="Title task" defaultValue={detail?.title} type="text" id="title" name="title" onChange={onHandleChange} required />
          </div>
          <div className="grid gap-2">
            <textarea disabled={isFormReady} className="p-2 bg-slate-50 border rounded-md w-full" placeholder="Your task summary" defaultValue={detail?.summary} id="summary" name="summary" onChange={onHandleChange} required></textarea>
          </div>
          <button type="submit" disabled={isFormReady} className="w-full bg-black text-white p-2 hover:opacity-80 active:ring-4 cursor-pointer rounded-md">{isSubmitting ? 'Updating tasks ...' : 'Update task'}</button>
        </div>
      </form>
    </div>
  )
}
