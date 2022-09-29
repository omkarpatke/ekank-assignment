import './App.css';
import React , { useState } from 'react';
import InputModule from './Components/inputModule/InputModule';
import ImageModal from './Components/ImageModal/ImageModal';
import TextModal from './Components/TextModal/TextModal';

function App() {
  const [showModule , setShowModule] = useState(false);
  const [showTextModal , setShowTextModal] = useState(false);
  const [showImageModal , setShowImageModal] = useState(false);
  const [ images, setImages ] = useState([]);
  const [ textInput, setTextInput ] = useState([]);

  function showInputModal(){
    setShowModule(!showModule);
    setShowTextModal(false);
    setShowImageModal(false);
  }

  return (
    <>
    <div className="App">
      <div className="plus-button" onClick={showInputModal}> + </div>
      {showModule ? <InputModule setShowModule={setShowModule} setShowTextModal={setShowTextModal} setShowImageModal={setShowImageModal} /> : ''}
      { showTextModal ? <TextModal textInput={textInput} setTextInput={setTextInput} /> : ''}
      { showImageModal ? <ImageModal images={images} setImages={setImages} /> : ''}
    </div>


    <div className='text-img-container'>
      <div className='images'>
        {images && images.map(pic => (
          <img key={pic} src={pic} alt="user-img" />
        ))}
      </div>

      <div className="user-text">
        {textInput && textInput.map((text , index) => (
          <div key={index} className='single-text' dangerouslySetInnerHTML={{__html: text}} ></div>
        ))}
      </div>
      
    </div>
    </>
  );
}

export default App;
