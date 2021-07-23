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
import HomeWorkRounded from '@material-ui/icons/HomeWorkRounded';
import Notification from '@material-ui/icons/Notifications';
import 'react-awesome-slider/dist/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPosts, postsSelector } from './slices/postsSlice'



function NavBar() {

  const [selectedNav, setSelectedNav] = useState('home');
	console.log(selectedNav);

  return (
    <div className="bg-white rounded-b-lg shadow-md">
      <div className="flex justify-between gap-1 p-3">
        <Link to="/sign-up">
          <img src={tailwindLogo} className="w-12 h-6" />
        </Link>
        <div className="flex mr-auto">
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

  return (
    <Router>
      <Switch>
        <Route path="/daily-motivation" component={DailyMotivation}/>
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/sign-up" component={SignUp} />
        <div>
        <NavBar />

        {/* ----------- first view on mobile screens ---------*/}

        <div className="flex mx-4 my-3 sm:hidden">
          <Link to="/daily-motivation">
            <div className="bg-yellow-400 w-auto p-3 rounded-full">
              <div className="flex justify-center px-2">
                <FaCrosshairs size="25" color="white"/>
                <div className="text-white pl-2 font-medium">
                  First
                </div>
              </div>
            </div>
          </Link>
          <div className="bg-yellow-400 w-auto ml-2 p-3 rounded-full">
            <div className="flex justify-center px-2">
              <FaBolt size="25" color="white"/>
              <div className="text-white pl-2 font-medium">Second</div>
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

            <div className="bg-yellow-500 w-auto h-44 mx-2 rounded-xl shadow-lg sm:hidden">
              <div className="flex-col p-4 h-full w-full">
              <div className="font-medium mb-2 text-white">
                Daily Quote
                </div>
              <div className="font-bold text-xl text-white">
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
                <div className="flex-col content-center p-4 h-ful">
                <div className="font-medium mb-2 text-black">
                  Daily Quote
                  </div>
                <div className="font-bold text-xl text-black">
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
    

    // <div className="bg-gray-100 m-2 rounded-lg shadow-lg">
    //   <div className="grid lg:grid-cols-2">
    //   <div className="px-8 py-16 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full">
    //     {/* <img className = "h-40" src = {img2} alt = "svgimage" /> */}
    //     <img className="h-auto w-auto mt-4 rounded-xl shadow-xl sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" src = {img1} alt = "svgimage" />
    //     <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl">
    //     You can work from anywhere.
    //     <br className="hidden lg:inline"></br>
    //     <span className="text-brand "> Take advantage of it</span> 
    //     </h1>
    //     <p className="mt-4 text-gray-600 sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    //       Morbi gravida pulvinar lorem imperdiet hendrerit. 
    //       Morbi tristique nisl eget ante posuere vulputate. 
    //       In scelerisque consectetur turpis.
    //     </p>
    //     <div className="mt-4">
    //       <a className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition mr-2" href = "#" >Click Here</a>
    //       <a className="btn btn-secondary" href = "#" >Learn More</a>
    //     </div>
    //   </div>
    //   <div className="hidden relative lg:block">
    //     <img className="absolute w-full h-full inset-0 object-cover object-center rounded-r-lg" src = {img1} alt = "svgimage" />
    //   </div>
    //   </div>
    // </div>
  );
}

export default App;
