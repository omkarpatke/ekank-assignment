import React , { useState } from 'react';
import './TextModal.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextModal = ({ textInput, setTextInput }) => {
  const [ value , setValue ] = useState('');

  let modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  let formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
  ]

  function addText(){
    setTextInput(prev => [...prev , value]);
    setValue('');
  }


  return (
    <div className='text-modal'>
      <ReactQuill 
      className='react-quill-textarea'
      placeholder='Write Something Amazing...'
      value={value}
      theme='bubble'
      onChange={(e) => setValue(e)}
      modules={modules}
      formats={formats}
      />
      <button onClick={addText}>Add Text</button>
    </div>
  )
}

export default TextModal