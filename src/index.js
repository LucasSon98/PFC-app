import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HomePage from './pages/home/App';
import ConfigPage from './pages/config/App';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/config' element={<ConfigPage/>}/>
            <Route path='*' element={<Navigate to='/' replace/>}/>
        </Routes>
    </Router>
);
