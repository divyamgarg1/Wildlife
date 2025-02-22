import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./Upload.css";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setSuccessMessage(""); // Reset message on new file selection
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file to upload!");
      return;
    }

    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setSuccessMessage(`File "${selectedFile.name}" uploaded successfully!`);
      setSelectedFile(null);
      setPreviewUrl("");
    }, 2000); // Simulating upload delay
  };

  return (
    <div className="upload-container">
      <div className="upload-frame">
        <h3>📤 Upload Your Datasheet</h3>
        <p>Upload any type of file (CSV, PDF, JPG, PNG, DOCX, etc.) for secure storage and analysis.</p>
        
        <div className="upload-box">
          <input type="file" id="fileInput" onChange={handleFileChange} />
          <label htmlFor="fileInput" className="file-label">
            <FaCloudUploadAlt className="upload-icon" /> Choose a File
          </label>
        </div>

        {selectedFile && <p className="file-name">📄 {selectedFile.name}</p>}

        <button className="upload-btn" onClick={handleUpload} disabled={!selectedFile || uploading}>
          {uploading ? "Uploading..." : "Upload File"}
        </button>

        {successMessage && <p className="success-message">{successMessage}</p>}

        <h3>📌 Preview</h3>
        {previewUrl ? (
          <div className="preview">
            <img src={previewUrl} alt="Preview" className="preview-image" />
          </div>
        ) : (
          <p className="no-preview">No preview available.</p>
        )}
      </div>
    </div>
  );
};

export default Upload;
