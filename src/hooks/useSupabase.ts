import { useState, useEffect, useRef } from "react";
import { Task } from "../interfaces/supabase.interface";
import { supabase } from "../supabaseClient";

const TASK_TABLE = "tasks";

export const useSupabase = () => {
  const [roleList, setRoleList] = useState<any>([]);
  const [tasksList, setTasksList] = useState<any>([]);
  const isMounted = useRef(true);

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

  const updateTaskActive = async (id: number, newIsCompleted: boolean) => {
    const { data, error } = await supabase
      .from(TASK_TABLE)
      .update({ isCompleted: newIsCompleted })
      .match({ id });
    return data;
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
    if (isMounted.current) {
      setRoleList(data);
    }
  };

  const getTasks = async () => {
    const { data } = await supabase
      .from(TASK_TABLE)
      .select("id,title,summary,isCompleted");

    if (isMounted.current) {
      setTasksList(data);
    }
  };

  useEffect(() => {
    getRole();
    getTasks();

    return () => {
      isMounted.current = false;
    };
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
