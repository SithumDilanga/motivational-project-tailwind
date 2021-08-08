// "build": "vite build", inside package.json

import DailyMotivation from './daily_motivation.js';
import UserProfile from './user_profile/user_profile';
import SignUp from './authentication/sign_up';
import Login from './authentication/log_in'; 
import PostExapanded from './home/posts/post_expanded';
import ImgSliderTest from './home/posts/imag_slider_test.js';
import 'react-awesome-slider/dist/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import React from 'react'
import Home from './home/home'
import DonateUs from './home/posts/donate_us.js';


function App() {

  document.body.style = 'background: rgba(243, 244, 246);';

  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/daily-motivation" component={DailyMotivation}/>
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/post-expanded" component={PostExapanded} />
        <Route path="/img-slider-test" component={ImgSliderTest} />
        <Route path="/donate-us" component={DonateUs} />
        <Home/>

      </Switch>
    </Router>
  );
}

export default App;