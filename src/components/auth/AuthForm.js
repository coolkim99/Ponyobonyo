import React, { useState } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const Wrapper = styled(Responsive)`
  width : 795px;
  position : absolute;
  top: 50%;
  left: 50%;
  transform : translate(-50%, -50%);
`

const InputDiv = styled.div`
  width: 360px;
  p {
    font-size: 14px;
    float : left;
    margin-bottom : 8px;
    margin-top : 46px;
    
  }
`;

const Input = styled.input`
  width: 360px;
  height: 50px;
  display : block;
  background: #F1F9FF;
  border: 2px solid #BCE0FD;
  box-sizing: border-box;
  border-radius: 10px;
`;

const textMap = {
    login: '로그인',
    register: '회원가입', 
};

const LeftDiv = styled.div`
float: left;
`

const Logo = styled.div`
  width: 310px;
  font-size : 2em;
  display : block;
`;

const Form = styled.form`
  float : right;
  text-align :center;
  display : inline-block;
`;

const EnableFormButton = styled.button`
  width: 327px;
  height: 48px;
  background-color : gray;
  margin-top : 58px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
    text-decoration: none;
  }
`;

const AuthForm = ({type, onSubmit}) => {
    const text = textMap[type];
    return (
        <>
        <Wrapper>
          <LeftDiv>
          <Logo>{text}</Logo>
          </LeftDiv>
          <Form onSubmit={onSubmit}>
          {type === 'register' && (
            <InputDiv>
              <p>이름</p>
              <Input
              name="memberName"
              placeholder="이름"
            />
            </InputDiv>
          )}
          <InputDiv>
            <p>ID</p>
            <Input
              name="username"
              placeholder="아이디"
            />
          </InputDiv>
          <InputDiv>
            <p>Password</p>
            <Input
              name="password"
              placeholder="비밀번호"
              type="password"
            />
          </InputDiv>
          {type === 'register' && (
            <InputDiv>
              <p>Password 확인</p>
              <Input
                name="passwordConfirm"
                placeholder="비밀번호 확인"
                type="password"
              />
            </InputDiv>
          )}
          {type === 'register' ? 
          <>
          <EnableFormButton>{text}</EnableFormButton>
          </>
          : <EnableFormButton>{text}</EnableFormButton>
          }
        </Form>
        </Wrapper>
        </>
    );
};

export default AuthForm;
