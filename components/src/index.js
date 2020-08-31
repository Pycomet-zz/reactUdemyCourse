import React from 'react';
import ReactDOM from 'react-dom';


// Create the App Component
const App = () => { 
  return (
    <div>
      <h1>Hi There!!</h1>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
