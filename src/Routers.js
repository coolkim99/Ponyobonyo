import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import HomeRecordPage from './pages/HomeRecordPage';

const Router = () => {
    return (
        <BrowserRouter>
        <Route component={HomePage} path='/' exact/>
        <Route component={LoginPage} path='/login'/>
        <Route component={RegisterPage} path='/register'/>
        <Route component={MainPage} path='/main'/>
        <Route component={HomeRecordPage} path='/homerecord'/>
        </BrowserRouter>
    );
};

export default Router;