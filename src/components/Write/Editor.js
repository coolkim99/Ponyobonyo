import React, {useRef, useEffect} from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
import Button from '../common/Button';

const EditorBlock = styled.div`
  width : 1100px;
  float : right;
  border : 0.1px gray solid;
  border-radius : 5px;
  padding : 24px;
`;

const Title = styled.div`
  font-size: 2rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  margin-bottom: 2rem;
  width: 9%;
  display : inline-block;
`
const TitleInput = styled.input`
  font-size: 2rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid gray;
  margin-bottom: 2rem;
  width: 90%;
  display : inline-block;
  float : right;
`;
const QuillWrapper = styled.div`
border: 1px solid gray;

  /* 최소 크기 지정 및 padding 제거 */
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const Cancle = styled(Button)`
  display : inline-block;
  margin-top : 10px;
  width : 30px;
  margin-right : 10px;
  margin-left : 450px;
`

const Program = styled.div`
  display : inline-block;
  height : 50px;
`
const Datalist = styled.datalist`
  left : 50px;
`
const Date = styled.div`
  margin-left : 250px;
  display : inline-block;
  height : 50px;
`

const Today = styled.div`
  display : inline-block;
  height : 50px;
  margin-left : 10px;
`

const Constructor = styled.div`
  display : inline-block;
  height : 50px;
  margin-left : 250px;
`

const Name = styled.div`
 display : inline-block;
  height : 50px;
  margin-left : 10px;
`

const Write = styled(Button)`
  display : inline-block;
  margin-top : 10px;
  width : 30px;
`

const Buttons =styled.div`
  margin:auto;
  width : 100%;
`

const Editor = ({ title, body, onChangeField }) => {
    const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
    const quillInstance = useRef(null); // Quill 인스턴스를 설정
  
    useEffect(() => {
      quillInstance.current = new Quill(quillElement.current, {
        theme: 'snow',
        placeholder: '내용을 작성하세요...',
        modules: {
          // 더 많은 옵션
          // https://quilljs.com/docs/modules/toolbar/ 참고
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
          
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
          
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
          
            ['clean']                                         // remove formatting button
          ],
        },
      });
    }, []);

    const today = new window.Date();   

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    return (
      <EditorBlock>
          <Title>제목 |</Title>  
        <TitleInput
          placeholder="제목을 입력하세요"
          value={title}
        />
        <Program>프로그램 |</Program>
        <input list="programs" id="program" name="program" style={{margin : "10px"}}/>
        <Datalist id="programs">
          <option >심리치료</option>
          <option>미술치료</option>
        </Datalist>
        <Date>날짜 |</Date>
        <Today>{year}.{month}.{date}</Today>
        <Constructor>강사 |</Constructor>
        <Name>담당자 이름</Name>
        <QuillWrapper>
          <div ref={quillElement} />
        </QuillWrapper>
        <Buttons>
          <Cancle to ='/main'>취소</Cancle>
          <Write to ='/diary'>작성</Write>
        </Buttons>
      </EditorBlock>
    );
  };
  
  export default Editor;