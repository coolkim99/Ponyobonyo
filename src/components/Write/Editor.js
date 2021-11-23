import React, {useRef, useEffect} from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';

const EditorBlock = styled.div`
    width : 1300px;
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

const Editor = ({ title, body, onChangeField }) => {
    const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
    const quillInstance = useRef(null); // Quill 인스턴스를 설정
  
    useEffect(() => {
      quillInstance.current = new Quill(quillElement.current, {
        theme: 'bubble',
        placeholder: '내용을 작성하세요...',
        modules: {
          // 더 많은 옵션
          // https://quilljs.com/docs/modules/toolbar/ 참고
          toolbar: [
            [{ header: '1' }, { header: '2' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['blockquote', 'code-block', 'link', 'image'],
          ],
        },
      });
    }, []);
    return (
      <EditorBlock>
          <Title>제목 |</Title>
        <TitleInput
          placeholder="제목을 입력하세요"
          value={title}
        />
        <QuillWrapper>
          <div ref={quillElement} />
        </QuillWrapper>
      </EditorBlock>
    );
  };
  
  export default Editor;