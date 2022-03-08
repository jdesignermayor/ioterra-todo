import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from "react-router-dom";

import { useSelector } from 'react-redux';
import { selectTodo } from './features/todo/todoSlice';

import { Login } from './components/Login';
import { Todos } from './components/Todos';
import { Create } from './components/Create';
import { Edit } from './components/Edit';

function App() {
  const stateProps = useSelector(selectTodo);

  const ProtectedRoute = ({
    redirectPath = '/login',
    children,
  }: any) => {
    if (!stateProps?.isLogged) {
      return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
  };

  return (
    <div className="App">
      <Router>
        <Navbar {...stateProps} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route
            path="todos"
            element={
              <ProtectedRoute>
                <Todos />
              </ProtectedRoute>
            }
          />
          <Route
            path="create"
            element={
              <ProtectedRoute>
                <Create />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit/:id"
            element={
              <ProtectedRoute>
                <Edit />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
