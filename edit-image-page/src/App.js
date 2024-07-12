import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Select Image for Background Replacement</h1>
        <UploadButton />
      </div>
    </div>
  );
}

function UploadButton() {
  function handleUpload() {
    // Handle the upload logic here
  }
  return (
    <button className="upload-button" onClick={handleUpload}>
      Upload Image from Device
    </button>
  );
}

export default App;
