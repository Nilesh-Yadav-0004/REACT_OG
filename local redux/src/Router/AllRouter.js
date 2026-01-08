import { Route, Routes } from 'react-router-dom';

import React from 'react';
import { Home } from './pages/Home';
import { Todo } from './pages/Todo';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Counter } from './Components/Counter';

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/todo" element={<Todo />}></Route>
            <Route path="/counter" element={<Counter />}></Route>
        </Routes>
    );
};