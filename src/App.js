import React from 'react';
import './App.css';
import CTA from './CallToAction'
import Callout from './Callout'
import { withFavoriteNumber } from './withFavoriteNumber'
import Menu from './HOC_Part_4/Menu'
import Favorite from './HOC_Part_4/Favorite'
import DataFetcher from './HOC_Part_4/DataFetcher'
import RenderPropsExample from './Render_Props/RenderProps'


function App(props) {
  console.log('app props', props)
  return (
    <div className="App">
      <RenderPropsExample render={
        function (name) {
          return <h1>Yo, {name}</h1>
        }
      }
        renderTwo={
          function(isDayTime) {
          return <p>{isDayTime ? 'It is day time' : 'It is not day time'}</p>
          }
        }
        renderNum={
          function(num) {
            return <p>It is {num >= 10 ? 'greater than or equal to 10' : 'less than 10'}</p>
          }
        }
        renderArr={
          function(arr) {
            return arr
          }
        }
      />
      
      <hr />
      <DataFetcher url="https://swapi.co/api/people/1">
          {({data, loading}) => 
            (
              loading ?
              <h1>Loading...</h1> :
              <p>{JSON.stringify(data)}</p>
            )
          }
      </DataFetcher>
      <Favorite />
      <Menu />

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
        <img src="https://picsum.photos/id/102/4320/3240" width="20%" alt='raspberries' />
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
