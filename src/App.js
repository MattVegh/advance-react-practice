import React from 'react';
import './App.css';
import CTA from './CallToAction'


function App() {
  return (
    <div className="App">
      <CTA>
        <h1>This is an important Call To Action</h1>
        <button>Click now or miss out!</button>
      </CTA>

      <CTA>
        <form>
          <input type='email' placeholder='Enter Email Address Here'/>
          <br />
          <button>Submit</button>
        </form>
      </CTA>
    </div>
  );
}

export default App;
