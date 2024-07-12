import React, { useState, useRef } from 'react';
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

  return (
    <div className="upload-container">
      {!image ? (
        <>
          <input
            type="file"
            id="file-input"
            accept="image/*"
            onChange={handleUpload}
            style={{ display: 'none' }}
            ref={fileInputRef}
          />
          <label htmlFor="file-input" className="upload-button">
            Upload Image from Device
          </label>
        </>
      ) : (
        <>
          <img src={image} alt="Uploaded" className="uploaded-image" />
          <button className="action-button" onClick={handleUploadAnother}>
            Upload Another Image
          </button>
          <button className="action-button" onClick={handleSelectBackground}>
            Select Background to be Replaced
          </button>
          <input
            type="file"
            id="file-input"
            accept="image/*"
            onChange={handleUpload}
            style={{ display: 'none' }}
            ref={fileInputRef}
          />
        </>
      )}
    </div>
  );
}

export default App;
