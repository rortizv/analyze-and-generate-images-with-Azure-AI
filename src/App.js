import React, { useState } from 'react';
import './index.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const key = 'YOUR_KEY_HERE';
  const endpoint = 'https://YOUR';

  const analyzeImage = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${endpoint}/computervision/imageanalysis:analyze?api-version=2023-10-01&features=tags,read,caption,denseCaptions,smartCrops,objects,people`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': key,
        },
        body: JSON.stringify({
          url: imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Image analysis failed');
      }

      const result = await response.json();
      setAnalysisResult(result);
    } catch (error) {
      console.error('Error analyzing image:', error);
      setAnalysisResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  const clearResponse = () => {
    setAnalysisResult(null);
  };

  const clearInput = () => {
    setImageUrl('');
  }

  return (
    <div className='main'>
      <h1>Azure Image Analyzer</h1>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image URL"
        />
      <div className="buttons-container">
        <button id='analyze' onClick={analyzeImage} disabled={isLoading || imageUrl === ''}>Analyze</button>
        <button id='clear-input' onClick={clearInput}>Clear Input</button>
        <button id='clear-response' onClick={clearResponse} disabled={isLoading}>Clear Response</button>
      </div>

      {isLoading && <div className='loader'></div>}

      {analysisResult && (
        <div className='result'>
          <h2>Analysis Result:</h2>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;