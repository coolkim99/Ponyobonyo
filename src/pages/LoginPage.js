import React from 'react';
import AuthForm from '../components/auth/AuthForm';

const LoginPage = ( {history} ) => {
    const onSubmit = () => {
        //로그인 dispatch(현재부원 명단에 있을 경우 로그인)
        //부원명단에 없고 대기자 명단에 있을 시 아직 승인 전 이라는 메시지
        history.push('/main');
    };
    return (
        <>
            <AuthForm type="login" onSubmit={onSubmit}/>
        </>
    );
};

export default LoginPage;