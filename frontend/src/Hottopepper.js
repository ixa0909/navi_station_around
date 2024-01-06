/*
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to the React application.</p>
    </div>
  );
}

export default App;
 */

import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const getOsakaInfo = async () => {
    try {
      const query = new URLSearchParams({station: 'なかもず'});
      const response = await fetch('/api/osaka?' + query);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      let message = '';
      for (let key in data) {
        message += 'name: ' + data[key].name + ' ';
        message += 'address: ' + data[key].address + ' ';
        message += 'url: ' + data[key].url + ' ';
        message += 'photo: ' + data[key].photo + ' ';
      }
      // setMessage(data.message);
      setMessage(message);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setMessage('Error fetching data: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Hello, React!</h1>
      <button onClick={getOsakaInfo}>大阪府</button>
      <p>{message}</p>
    </div>
  );
}

export default App;