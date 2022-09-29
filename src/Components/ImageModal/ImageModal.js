import React , { useState } from 'react';
import './ImageModal.css';

const ImageModal = ({ setImages , images }) => {
  const [ image , setImage ] = useState('');
  const [ error , setError ] = useState(false);


  const getImageLink = async() => {
    if(image.type ==='image/jpeg' || image.type === 'image/png'){
      const data = new FormData();
        data.append('file' , image);
        data.append('upload_preset' , 'faster-chat-app');
        data.append('cloud_name' , 'dvzfukz3n');
        fetch('https://api.cloudinary.com/v1_1/dvzfukz3n/image/upload',{
          method:'post',
          body:data,
        }).then((res) => res.json()).then((result) => {
          setImages(prev => [...prev , result.url]);
        }).catch((err) => {
          console.log(err);
        });
    }else{
      setError(true);
    }
  }



  return (
    <>
    <div className='image-modal'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiun515ktd1Qxd3OGzquAXv57JlMgt26HMkA&usqp=CAU" alt="camera-img" />
      <div className="heading">Upload An Image</div>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={getImageLink}> Upload </button>
    </div>
    <div className="error">
      { error ? 'Please Select Only Image' : ''}
    </div>
    </>
  )
}

export default ImageModal