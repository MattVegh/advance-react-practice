import React from 'react';
import './App.css';
import CTA from './CallToAction'
import Callout from './Callout'


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

      <h1>Welcome!</h1>
      <Callout 
        header='Do not miss out!'
        body='Unless you do not suffer from FOMO, you better make sure you fill out the email form below!'
        />

      <Callout 
        />
        
      <Callout 
        />

    </div>
  );
}

export default App;
