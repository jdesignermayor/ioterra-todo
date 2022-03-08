import { useState } from "react";
import { useSupabase } from "../hooks/useSupabase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectTodo } from "../features/todo/todoSlice";

export const useTaskCard = (isCompleted: any) => {
  const { role } = useSelector(selectTodo);
  const [isChecked, setIsChecked] = useState(isCompleted);

  const { updateTaskActive } = useSupabase();
  const nav = useNavigate();

  const onToggleChange = async (id: any) => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    updateTaskActive(id, newChecked).then((res) => {
      console.log(res);
    });
  };

  const openEdit = (id: any) => {
    nav(`/edit/${id}`);
  };

  return {
    role,
    isChecked,
    onToggleChange,
    openEdit,
  };
};
