// "build": "vite build", inside package.json

import DailyMotivation from './daily_motivation.js';
import UserProfile from './user_profile/user_profile';
import SignUp from './authentication/sign_up';
import Login from './authentication/log_in'; 
import Post from './home/posts/post';
import PostExapanded from './home/posts/post_expanded';
import 'react-awesome-slider/dist/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPosts, postsSelector } from './slices/postsSlice'
import Backdrop from './navDrawer/backdrop';
import Home from './home/home'


function App() {

  document.body.style = 'background: rgba(243, 244, 246);';

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const dispatch = useDispatch()
  const { posts, loading, hasErrors } = useSelector(postsSelector)

  // const [isPostOpen, setIsPostOpen] = useState(false);

  //   const togglePostPopUp = () => {
  //     setIsPostOpen(!isPostOpen);
  //     console.log('pop up!');
  //   }

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  // error handling & map successful query data 
  const renderPosts = () => {
    if (loading) return <p>Loading recipes...</p>
    if (hasErrors) return <p>Cannot display recipes...</p>

    return posts.map(post => 
      <Post postData={post} />  
    )
  }

  const drawerToggleClickHandler = () => {
    setIsDrawerOpen(true);
    // return {isDrawerOpen};
  }

  const backdropClickHandler = () => {
    setIsDrawerOpen(false);
  }

  // let sideDrawer;
  let backDrop;

  if(isDrawerOpen) {
    // sideDrawer = <SideDrawer />;
    backDrop = <Backdrop backdropClick={backdropClickHandler} />;
  }

  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/daily-motivation" component={DailyMotivation}/>
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/post-expanded" component={PostExapanded} />

        <Home/>

      </Switch>
    </Router>
  );
}

export default App;