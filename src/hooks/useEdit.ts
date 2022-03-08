import { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSupabase } from "../hooks/useSupabase";

export const useEdit = (id: any) => {
  const formReducer = (state: any, event: any) => {
    return {
      ...state,
      [event.name]: event.value,
    };
  };

  const { updateTask, getTaskById } = useSupabase();
  const [formData, setFormData] = useReducer(formReducer, {});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormReady, setIsFormReady] = useState(true);

  const [detail, setDetail] = useState<any>(null);
  const nav = useNavigate();

  const onHandleChange = (event: any) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const onHandleSubmit = (event: any) => {
    event.preventDefault();
    const { title, summary } = formData;
    setIsSubmitting(true);

    updateTask({ id, title, summary }).then(({ data, error }) => {
      if (!error) {
        setIsSubmitting(false);
        nav("/todos");
      } else {
        setIsSubmitting(false);
      }
    });
  };
  
  const onNavToHome = () => {
    nav("/todos");
  };

  const assignValues = (data: any) => {
    const detailState = data[0];

    setFormData({
      name: "title",
      value: detailState?.title,
    });

    setFormData({
      name: "summary",
      value: detailState?.summary,
    });

    setDetail(detailState);
    setIsFormReady(false);
  };

  useEffect(() => {
    getTaskById(id).then(({ data, error }) => {
      if (!error) {
        assignValues(data);
      }
    });
  }, [id]);

  return {
    onHandleChange,
    onHandleSubmit,
    onNavToHome,
    assignValues,
    isSubmitting,
    isFormReady,
    detail,
  };
};
