import { onSignOut } from "../features/todo/todoSlice";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const useNavbar = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const onHandleSignOut = () => {
    dispatch(onSignOut());
    nav("/login");
  };

  return {
    onHandleSignOut,
  };
};
