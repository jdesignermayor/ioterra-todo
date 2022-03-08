import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface TodoState {
  todoList: Array<any>;
  isLogged: boolean;
  role: string;
}

const initialState: TodoState = {
  todoList: [],
  isLogged: false,
  role: "",
};

export const todoSlice = createSlice({
  name: "UI-TODO",
  initialState,
  reducers: {
    onSignIn: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
      state.isLogged = true;
    },
    onSignOut: (state) => {
      state.role = "";
      state.isLogged = false;
    },
  },
});

export const selectTodo = (state: RootState) => state.ui;
export const { onSignIn, onSignOut } = todoSlice.actions;
export default todoSlice.reducer;
