import React from 'react';
import './App.css';
import CTA from './CallToAction'
import Callout from './Callout'
import { withExtraPropHOC } from './HOCwithExtraProp'
import { withFavoriteNumber } from './withFavoriteNumber'
import Menu from './HOC_Part_4/Menu'
import Favorite from './HOC_Part_4/Favorite'


function App(props) {
  console.log('app props', props)
  return (
    <div className="App">
      <Menu />
      <hr />
      <Favorite />

      <div>{props.favoriteNumber}</div>

      <CTA>
        <h1>This is an important Call To Action</h1>
        <button>Click now or miss out!</button>
      </CTA>

      <CTA>
        <form>
          <input type='email' placeholder='Enter Email Address Here' />
          <br />
          <button>Submit</button>
        </form>
      </CTA>

      <h1>Welcome!</h1>
      <Callout>
        <h2>Don't miss out!</h2>
        <p>Unless you don't suffer from FOMO, you better make sure you fill out the email form below!</p>
      </Callout>

      <Callout>
        <img src="https://picsum.photos/id/102/4320/3240" width="20%" />
        <figcaption>Just look at those sparkling raspberries!</figcaption>
      </Callout>

      <Callout>
        <h2>Give us your email. We definitely won't sell it to anyone.</h2>
        <input type="email" placeholder="Enter Email" />
        <button>Sign me up!</button>
      </Callout>
      
    </div>
  );
}


export default withFavoriteNumber(App);
