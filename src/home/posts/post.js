import React, {useState} from 'react';
import img1 from '../../assets/img1.jpg';
// import img2 from './assets/img2.png';
import { RiShareForwardLine } from 'react-icons/ri'
import { FaShareSquare } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa'
import { FaBolt } from 'react-icons/fa'
import { FaCrosshairs } from 'react-icons/fa';
import { IoArrowRedoOutline } from 'react-icons/io5';
import { MdBookmarkBorder } from 'react-icons/md';
import { MdBookmark } from 'react-icons/md';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ReactionSection from './reaction_selection';

import { Link } from 'react-router-dom';
import PostExapanded from './post_expanded';
import { useHistory } from "react-router-dom";
import './post.css';

  
  function Post({postData}) {

    // const [isPostOpen, setIsPostOpen] = useState(false);

    // const togglePostPopUp = () => {
    //   setIsPostOpen(!isPostOpen);
    //   console.log('pop up!');
    // }

    const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleBookmark = () => {
      setIsBookmarked(!isBookmarked);
    }

    let history = useHistory();

    function openPostExpanded() {
      history.push({
        pathname: '/post-expanded',
        search: '?query=abc',
        state: {postDetails: postData}
      });
    }

    return (
      <React.Fragment>
        <div className=" bg-white my-4 mx-1 rounded-lg sm:rounded-2xl shadow-lg">
          <div className="grid grid-flow-row">
            <div className="flex items-center ml-3 mt-3 sm:ml-6 sm:mt-6 mb-3">
              <img src={img1} className="w-12 h-12 rounded-full object-cover object-cente"/>
              <div className="flex-col mt-1 ml-4">
                <div className="text-base font-bold">
                  {postData.username}
                </div>
                <div className="text-sm text-gray-500">
                  {postData.date}
                </div>
              </div>
              <div className = "flex items-center gap-3 ml-auto mr-6">
                {/* <Link to="/post-expanded"> */}

                   {isBookmarked ? 
                   <MdBookmark size="25" className="cursor-pointer" color="#ffa500" onClick={toggleBookmark} /> : 
                   
                   <MdBookmarkBorder size="25" className="cursor-pointer" onClick={toggleBookmark} />}  

                  <IoArrowRedoOutline size = {25} className="cursor-pointer" />
                {/* </Link> */}
              </div>
            </div>
            <div className="mt-0 ml-3 font-normal text-base">
              {postData.postDesc}
            </div>
            <div className="mt-2">
              {/* <img src = {img1} className="" /> */}
              <AwesomeSlider bullets = {false} className="cursor-pointer" > 
                <div data-src={postData.postImages[0]} onClick={openPostExpanded} />
                <div data-src={postData.postImages[1]} />
              </AwesomeSlider>
            </div>
            <div className="ml-4 mt-3 mb-4">
              <ReactionSection postReactionsData={postData.postReactions}/>
            </div>
          </div>
            </div>
      </React.Fragment>

    );
  }

  function ReactionButton({reactionText}) {
    return (
      <button className="rounded-full py-2 px-3">
        {reactionText}
      </button>
    );
  }
  

  export default Post;