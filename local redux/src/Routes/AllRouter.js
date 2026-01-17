import { Route, Routes } from 'react-router-dom';
import React from 'react';

import { Todo } from '../Pages/Todo';
import { Signup } from '../Pages/Signup';
import { LoginPage } from '../Pages/LoginPage';
import { Navbar } from '../Components/Navbar';
import { Home } from '../Pages/Home';
import { Counter } from '../Components/Counter';
import { PrivateRoutes } from '../Components/PrivateRoutes';

export const AllRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/todo"
          element={
            <PrivateRoutes>
              <Todo />
            </PrivateRoutes>
          }
        />

        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
};