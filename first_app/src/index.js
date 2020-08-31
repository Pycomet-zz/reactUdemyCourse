import React from 'react';
import ReactDOM from 'react-dom';


// Create the App Component
const App = () => {
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';

  const buttonStyle = {backgroundColor: 'blue', color: 'white'};

  return (
    <div>
      <label className='label' htmlFor='name'>
        {labelText}
      </label>
      <input type="text" name="name"/>
      <button style={buttonStyle}>
        {buttonText.text}
      </button>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
