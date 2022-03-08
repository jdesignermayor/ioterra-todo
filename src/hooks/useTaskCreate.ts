import { useState, useReducer } from "react";
import { useSupabase } from "../hooks/useSupabase";
import { useNavigate } from "react-router-dom";

export const useTaskCreate = () => {
  const formReducer = (state: any, event: any) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nav = useNavigate();
  const { addTask } = useSupabase();

  const onHandleSubmit = (event: any) => {
    event.preventDefault();
    const { title, summary } = formData;
    setIsSubmitting(true);
    addTask({ title, summary, isCompleted }).then(({ data, error }) => {
      if (!error) {
        nav("/todos");
        setIsSubmitting(false);
      } else {
        console.log("error:", error);
        setIsSubmitting(false);
      }
    });
  };

  const onToggleChange = () => {
    setIsCompleted(!isCompleted);
  };

  const onHandleChange = (event: any) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return {
    isCompleted,
    isSubmitting,
    onToggleChange,
    onHandleChange,
    onHandleSubmit,
  };
};
