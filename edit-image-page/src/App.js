import React, { useState } from 'react';
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

  return (
    <div>
      <input
        type="file"
        id="file-input"
        accept="image/*"
        onChange={handleUpload}
        style={{ display: 'none' }}
      />
      <label htmlFor="file-input" className="upload-button">
        Upload Image from Device
      </label>
      {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
    </div>
  );
}

export default App;
