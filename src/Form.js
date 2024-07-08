import React, { useState } from 'react';
import './input.css';

const Input = () => {
  const [textInput, setTextInput] = useState('');
  const [slidesInput, setSlidesInput] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loader visibility

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSlidesChange = (e) => {
    setSlidesInput(e.target.value);
  };

  const handleSubmitTextForm = (e) => {
    e.preventDefault();
    data_to_send();
    console.log('Text Form Submitted:', textInput);
    setTextInput('');
    setSlidesInput('');
  };

  const data_to_send = async () => {
    setLoading(true); // Show loader
    try {
      const dataToSend = {
        number: slidesInput,
        text: textInput,
      };

      const response = await fetch('https://abdulrehman123.pythonanywhere.com/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error(`Error sending data to server. Status: ${response.status}, ${await response.text()}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'presentation.pptx';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url); // Clean up the URL.createObjectURL reference

      console.log('Presentation downloaded successfully');
    } catch (error) {
      console.error('Error sending request to the server:', error.message);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div className="bg d-flex align-items-center justify-content-center">
      <div className="form-container">
        <h1 className="form-title">Presentation Generator</h1>

        {loading ? (
          <div className="loader">Loading...</div> // Loader element
        ) : (
          <form onSubmit={handleSubmitTextForm} className="mb-4">
            <div className="form-group">
              <label htmlFor="textInput">Title:</label>
              <input
                type="text"
                id="textInput"
                className="form-control"
                value={textInput}
                onChange={handleTextChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="slidesCount">Number of Slides:</label>
              <input
                type="number"
                id="slidesCount"
                className="form-control"
                value={slidesInput}
                onChange={handleSlidesChange}
                min="1"
              />
            </div>
            <button type="submit" className="btn btn-primary">Generate Slides</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Input;
