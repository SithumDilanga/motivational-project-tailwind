// "build": "vite build", inside package.json

import img1 from './assets/img1.jpg';
import tailwindLogo from './assets/tailwindLogo.png';
import DailyMotivation from './daily_motivation.js';
import UserProfile from './user_profile/user_profile';
import SignUp from './authentication/sign_up';
import postData from './fakeApiData';
import Post from './home/post';
import { FaBolt } from 'react-icons/fa'
import { FaCrosshairs } from 'react-icons/fa';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import HomeWorkRounded from '@material-ui/icons/HomeWorkRounded';
import Notification from '@material-ui/icons/Notifications';
import 'react-awesome-slider/dist/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPosts, postsSelector } from './slices/postsSlice'
import SideDrawer from './navDrawer/side_drawer';
import Backdrop from './navDrawer/backdrop';



function NavBar({drawerClickHandler}) {

  const [selectedNav, setSelectedNav] = useState('home');

  return (
    <div className="bg-white rounded-b-lg shadow-md">
      <div className="flex justify-between gap-1 p-3">
        <div className="flex">
          <MdMenu size="32" className="block self-center sm:hidden" onClick=  {drawerClickHandler} cursor="pointer" />
          <Link to="/sign-up">
            {/* <img src={tailwindLogo} className="w-12 h-full ml-3" /> */}
            <div className="flex items-center mt-1">
              <div className="bg-gray-500 h-9 w-9 sm:w-10 sm:h-10 ml-3 rounded-xl">
              </div>
              <div className="ml-2 sm:text-lg font-bold">LOGO</div>
            </div>
          </Link>
        </div>
        <div className="mr-auto hidden sm:flex">
          <button className="flex items-center ml-20 px-2 hover:bg-gray-100   rounded-md" onClick={() => setSelectedNav('home')}>

            {selectedNav ? <HomeWorkRounded style={{fontSize: 42, color:"rgba(245, 158, 11)"}} /> : <HomeWorkRounded style={{ fontSize: 42}} />}

            <div className={`font-face-gm text-xl ${selectedNav ? "text-yellow-500" : ""}`}>
              Home
            </div>
          </button>

          <button className="flex items-center ml-4 px-2 hover:bg-gray-100   rounded-md" onClick={() => setSelectedNav('notifications')}>

            <Notification style={{fontSize: 42, color:"rgba(107, 114, 128)"}} />

            <div className={`font-face-gm text-xl ${selectedNav ? "text-gray-500" : ""}`}>
              Notifications
            </div>
          </button>

          <button className="flex items-center ml-4 px-2 hover:bg-gray-100   rounded-md" onClick={() => setSelectedNav('notifications')}>

            <FaHandHoldingHeart size="38" color="rgba(107, 114, 128)"/>

            <div className={`font-face-gm text-xl ${selectedNav ? "text-gray-500" : ""} ml-2`}>
              Donate Us
            </div>
          </button>

        </div>
        <Link to="/user-profile">
          <div className="flex gap-2 items-center">
            <div className="text-base font-medium">Dear John</div>
            <img src={img1} className="w-11 h-11 rounded-full object-cover object-center" />
          </div>
        </Link>
      </div>
      </div>
  );
}



function App() {

  document.body.style = 'background: rgba(243, 244, 246);';

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const dispatch = useDispatch()
  const { posts, loading, hasErrors } = useSelector(postsSelector)

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
        <Route path="/daily-motivation" component={DailyMotivation}/>
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/sign-up" component={SignUp} />
        <div>
        <NavBar drawerClickHandler={drawerToggleClickHandler} />
        {/* <NavDrawer drawerClickHandler={drawerToggleClickHandler} /> */}
        <SideDrawer show={isDrawerOpen} />
        {/* {sideDrawer} */}
        {backDrop}
        
        {/* ----------- first view on mobile screens ---------*/}

        <div className="flex mx-4 my-3 sm:hidden">
          <Link to="/daily-motivation">
            <div className="bg-brand-primary w-auto p-3 rounded-full">
              <div className="flex justify-center items-center px-2">
                <FaCrosshairs size="25" color="white"/>
                <div className="text-white pl-2 font-medium">
                  First
                </div>
              </div>
            </div>
          </Link>
          <div className="bg-brand-primary w-auto ml-2 p-3 rounded-full">
            <div className="flex justify-center items-center px-2">
              <FaBolt size="25" color="white"/>
              <div className="text-white pl-2 font-medium">
                Second
              </div>
            </div>
          </div>
        </div>

        {/* ----------- End first view on mobile screens ---------*/}

        <div className="grid gap-1 h-full grid-cols-1 sm:grid-cols-4">
          <div>
            
          </div>
          {/* <div className="grid-flow-col mx-3 mt-3">
            <button className="bg-gray-50 col-span-1 order-2 h-16 w-full rounded-full shadow-md hover:bg-brand-third hidden sm:order-1 sm:block">
              <div className="flex mx-6">
                <FaBolt size="28" className="mr-3" />
                <div className="text-black text-lg font-bold  hover:text-white">
                  First Option
                </div>
              </div>
            </button>

            <button className="bg-gray-50 col-span-1 order-2 h-16 w-full mt-2 rounded-full shadow-md hover:bg-brand-third hidden sm:order-1 sm:block">
              <div className="flex mx-6">
                <FaBolt size="28" className="mr-3" />
                <div className="text-black text-lg font-bold  hover:text-white">
                  Second Option
                </div>
              </div>
            </button>

            <button className="bg-gray-50 col-span-1 order-2 h-16 w-full mt-2 rounded-full shadow-md hover:bg-brand-third hidden sm:order-1 sm:block">
              <div className="flex mx-6">
                <FaBolt size="28" className="mr-3" />
                <div className="text-black text-lg font-bold  hover:text-white">
                  Third Option
                </div>
              </div>
            </button>
          </div> */}
          <div className="order-1 sm:col-span-2">

            {/* first view on mobile screens */}

            <div className="bg-white w-auto h-44 mx-2 rounded-xl shadow-lg sm:hidden">
              <div className="flex flex-col text-center justify-center h-full w-full  rounded-xl border border-yellow-500">
                <div className="font-medium text-xl mb-2 text-black">
                  Daily Quote
                </div>
                <div className="font-bold text-2xl text-black">
                  Stay Strong at life storms
                </div>
              </div>
            </div>

            {/* posts */}

            {renderPosts()}

            {/* <Post postData={postData[0]}/>
            <Post postData={postData[1]}/>
            <Post postData={postData[2]}/>
            <Post postData={postData[3]}/> */}
          </div>
          <div className="hidden sm:block sm:order-1">
            <div className="grid-flow-col mx-2 mt-4 ">
              <div className="bg-white w-auto h-44 mb-2 rounded-xl shadow-md">
                <div className="flex flex-col text-center justify-center content-center p-4 h-full">
                  <div className="font-medium mb-2 text-black">
                    Daily Quote
                  </div>
                  <div className="font-face-varela font-bold text-xl text-black">
                    Stay Strong at life storms
                  </div>
                </div>
              </div>
              {/* <div className="bg-yellow-400 w-auto h-32 rounded-xl content-center align-middle">
              </div> */}
            </div>
            
          </div>   
          {/* <div className="bg-blue-900">Col 4</div>     */}
        </div>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
