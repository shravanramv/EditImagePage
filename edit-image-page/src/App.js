import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>ShiftShade - Background Shifter</h1>
        <UploadButton />
      </div>
    </div>
  );
}

function UploadButton() {
  const [image, setImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const fileInputRef = useRef(null);

  function handleUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleUploadAnother() {
    fileInputRef.current.click();
  }

  function handleSelectBackground() {
    // Implement background selection functionality
    console.log('Select background to be replaced');
  }

  useEffect(() => {
    if (image) {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const width = 500;
        const height = 500;

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        setResizedImage(canvas.toDataURL());
      };
    }
  }, [image]);

  return (
    <div className="upload-container">
      <input
        type="file"
        id="file-input"
        accept="image/*"
        onChange={handleUpload}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      {!resizedImage ? (
        <label htmlFor="file-input" className="upload-button">
          Upload Image from Device
        </label>
      ) : (
        <>
          <img src={resizedImage} alt="Uploaded" className="uploaded-image" />
          <button className="action-button" onClick={handleUploadAnother}>
            Upload Another Image
          </button>
          <button className="action-button" onClick={handleSelectBackground}>
            Remove Background
          </button>
        </>
      )}
    </div>
  );
}

export default App;
