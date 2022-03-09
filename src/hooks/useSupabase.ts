import { useState, useEffect } from "react";
import { Task } from "../interfaces/supabase.interface";
import { supabase } from "../supabaseClient";

const TASK_TABLE = "tasks";

export const useSupabase = () => {
  const [roleList, setRoleList] = useState<any>([]);
  const [tasksList, setTasksList] = useState<any>([]);

  const addTask = ({ title, summary, isCompleted }: Task) => {
    return supabase
      .from(TASK_TABLE)
      .insert({
        title,
        summary,
        isCompleted,
      })
      .single();
  };

  const updateTaskActive = (id: number, newIsCompleted: boolean) => {
    return supabase
      .from(TASK_TABLE)
      .update({ isCompleted: newIsCompleted })
      .match({ id });
  };

  const updateTask = ({ id, title, summary }: any) => {
    return supabase
      .from(TASK_TABLE)
      .update({ id, title, summary })
      .match({ id });
  };

  const getTasksByQuery = async (query: string) => {
    return supabase
      .from("tasks")
      .select("*")
      .like("title, summary", `%${query}%`);
  };

  const getTaskById = (id: any) => {
    return supabase.from(TASK_TABLE).select("*").eq("id", id);
  };

  const getRole = async () => {
    const { data } = await supabase.from("role");
    setRoleList(data);
  };

  const getTasks = async () => {
    const { data } = await supabase
      .from(TASK_TABLE)
      .select("id,title,summary,isCompleted");
    setTasksList(data);
  };

 
  useEffect(() => {
    getRole();
    getTasks();
  }, []);

  return {
    roleList,
    tasksList,
    addTask,
    getTaskById,
    getTasksByQuery,
    updateTask,
    updateTaskActive,
  };
};
