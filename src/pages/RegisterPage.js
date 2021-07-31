import React from 'react';
import AuthForm from '../components/auth/AuthForm';

const RegisterPage = ( {history} ) => {
    const onSubmit = () => {
        history.push('/main');
    };
    return (
        <>
            <AuthForm type="register" onSubmit={onSubmit}/>
        </>
    );
};

export default RegisterPage;