
import img1 from '../assets/img1.jpg';
import Post from '../home/posts/post';
import { FaBolt } from 'react-icons/fa'
import { FaCrosshairs } from 'react-icons/fa';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { MdArrowDropDown } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';
import HomeWorkRounded from '@material-ui/icons/HomeWorkRounded';
import Notification from '@material-ui/icons/Notifications';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';
import '../App.css';
import './home.css'

import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PulseLoader from "react-spinners/PulseLoader";

import { fetchPosts, postsSelector } from '../slices/postsSlice'
import SideDrawer from '../navDrawer/side_drawer';
import Backdrop from '../navDrawer/backdrop';

import { getPosts } from '../slices/postNewSlice';

function NavBar({drawerClickHandler}) {

  const [selectedNav, setSelectedNav] = useState('home');

	const dropDownItems = ['Your profile', 'Logout'];

	const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedDrop, setSelectedDrop] = useState(null);

	const togglingDropDown = () => {
		setIsDropDownOpen(!isDropDownOpen);
	};

	const onDropItemClicked = value => () => {
    setSelectedDrop(value);
    setIsDropDownOpen(false);
    console.log(value);
  };

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

            {selectedNav ? <HomeWorkRounded style={{fontSize: 35, color:"rgba(245, 158, 11)"}} /> : <HomeWorkRounded style={{ fontSize: 35}} />}

            <div className={`font-face-gm text-lg ${selectedNav ? "text-yellow-500" : ""}`}>
              Home
            </div>
          </button>

          <Link to="/img-slider-test">
          <button className="flex items-center ml-4 px-2 hover:bg-gray-100   rounded-md" onClick={() => setSelectedNav('notifications')}>

            <Notification style={{fontSize: 35, color:"rgba(107, 114, 128)"}} />

            <div className={`font-face-gm text-lg ${selectedNav ? "text-gray-500" : ""}`}>
              Notifications
            </div>
          </button>
          </Link>

          <Link to="/donate-us">
          <button className="flex items-center ml-4 px-2 hover:bg-gray-100   rounded-md" onClick={() => setSelectedNav('notifications')}>

            <FaHandHoldingHeart size="31" color="rgba(107, 114, 128)"/>

            <div className={`font-face-gm text-lg ${selectedNav ? "text-gray-500" : ""} ml-2`}>
              Donate Us
            </div>
          </button>
          </Link>

        </div>
					<div className="userProfile">
          	<div className="flex gap-2 items-center ">
        			<Link to="/user-profile">
								<div className="flex gap-2 items-center hover:text-brand-primary">
          		  	<div className="text-base font-medium">Dear John</div>
          		  	<img src={img1} className="w-11 h-11 rounded-full object-cover object-center" />
								</div>
        			</Link>
							<MdArrowDropDown size="32" onClick={togglingDropDown} className="cursor-pointer sm:hover:bg-yellow-100 rounded-full" />
          	</div>
						<div className="flex justify-end">
							{isDropDownOpen && (
								<div className="bg-gray-100 flex flex-col gap-y-1 absolute px-3 py-2 mt-1.5 rounded-lg shadow-lg z-20">
									{dropDownItems.map(option => (
										<div className="" onClick={onDropItemClicked(option)} key={option}>
											<AccDropDown dropdownItem={option} />
										</div>
									))}
								</div>
							)}
						</div>
					</div>
      </div>
      </div>
  );
}


function AccDropDown({dropdownItem}) {
  return (
    <React.Fragment>
      <div className="flex items-center z-20 mt-0.5 px-6 py-1 hover:text-white hover:bg-brand-secondary rounded-md cursor-pointer">
		  	<div>
		  		{dropdownItem === 'Your profile' && <MdPerson size="24" />}
		  		{dropdownItem === 'Logout' && <FaSignOutAlt size="24" />}
		  		{/* <MdPerson size="24" /> */}
		  	</div>
		  	<div className="py-1 px-4 text-base font-medium rounded-sm ">
        	{dropdownItem}
		  	</div>
      </div>
    </React.Fragment>
  );
}

function Home() {

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const dispatch = useDispatch()
  /*const { posts, loading, hasErrors } = useSelector(postsSelector)*/

  // const [isPostOpen, setIsPostOpen] = useState(false);

  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts);

  //   const togglePostPopUp = () => {
  //     setIsPostOpen(!isPostOpen);
  //     console.log('pop up!');
  //   }

  function getPostsText() {
    fetch('https://enigmatic-shore-01544.herokuapp.com/api/v1/posts').then(function(response) {
      return response.json();
    })
    .then(function(details) {
      // console.log(details['data'].posts);
    });
  }

  useEffect(() => {

    getPostsText();

    // dispatch(fetchPosts())
    dispatch(getPosts())
    .unwrap().then((originalPromiseResult) => {
      // console.log(originalPromiseResult);
    }).catch((rejectedValueOrSerializedError) => {
      console.log(rejectedValueOrSerializedError);
    });
  }, [dispatch])

  // error handling & map successful query data 
  const renderPosts = () => {
    if (status === 'loading') return (
        <div className="flex justify-center mt-8">
          <PulseLoader size={10} color="#ffa500" />
          {/* Loading... */}
        </div>)
    if (status === 'failed') return <p>Cannot display recipes...</p>

    return posts.map(post => 
      <Post postData={post} />  
    )

    /*return posts.map((post, i) => 
      <h1 key={i}>{post.name}</h1>
    )*/
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

	return(
		<React.Fragment>
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
                <div className="font-bold text-xl pb-6">
                  Daily Quote
                </div>
                <div className="font-face-varela font-bold text-2xl text-black">
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
            <div className="grid-flow-col mx-2 mt-4">
              <div className="dailyQuote bg-white w-auto h-44 mb-2 rounded-xl shadow-md">
                <div className="flex flex-col text-center justify-center content-center p-4 h-full">
                  <div className="titleText font-bold text-lg text-brand-primary pb-6">
                    Daily Quote
                    </div>
                  <div className="expressionText font-face-varela font-bold text-2xl text-black">
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
        {/* <PopupModel /> */}
	 </React.Fragment>
	);
}

export default Home;