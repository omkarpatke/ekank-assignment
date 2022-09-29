import React from 'react';
import './InputModule.css';

const InputModule = ({setShowModule, setShowTextModal, setShowImageModal}) => {

  function showImageInputModal(){
      setShowImageModal(prev => !prev);
      setShowModule(false);
      setShowTextModal(false);
  }

  function showTextInputModal(){
      setShowTextModal(prev => !prev);
      setShowModule(false);
      setShowImageModal(false);
  }
  return (
    <>
    <div className='input-module'>
        <h2>Choose</h2>
        <div className="text-input" onClick={showTextInputModal}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5v-AM81JfEUIu0rhgijuv87gWGOXICb9OEg&usqp=CAU" alt="text-img" />
          <div className="text">
            <div className='heading'>Text</div>
            <p>Just Start Writing With Plain Text</p>
          </div>
        </div>
        <div className="img-input" onClick={showImageInputModal}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&usqp=CAU" alt="profile-img" />
         <div className="text">
            <div className='heading'>Image</div>
            <p>Upload Or Embeded With Link</p>
         </div>
        </div>
    </div>

    
    </>
  )
}

export default InputModule