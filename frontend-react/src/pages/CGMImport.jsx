import { useState, useRef } from 'react';
import './CGMImport.css';

function CGMImport() {
  const [imagePreview, setImagePreview] = useState(null);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    // Read as data URL for preview
    const reader = new FileReader();
    reader.onload = (event) => {
      setImagePreview(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImagePreview(null);
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="cgm-import">
      <div className="cgm-import__header">
        <h1>CGM Import</h1>
        <p>Upload a screenshot of your blood glucose data</p>
      </div>

      <div className="cgm-import__upload">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <button
          className="cgm-import__upload-btn"
          onClick={() => fileInputRef.current?.click()}
        >
          📷 Upload BG Screenshot
        </button>
        {fileName && <span className="cgm-import__filename">{fileName}</span>}
        {imagePreview && (
          <button className="cgm-import__clear-btn" onClick={clearImage}>
            ✕ Clear
          </button>
        )}
      </div>

      {imagePreview && (
        <div className="cgm-import__preview">
          <img src={imagePreview} alt="BG Screenshot" />
        </div>
      )}
    </div>
  );
}

export default CGMImport;

