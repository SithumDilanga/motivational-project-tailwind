import React from 'react';
import img1 from '../assets/img1.jpg';
// import img2 from './assets/img2.png';
import { RiShareForwardLine } from 'react-icons/ri'
import { FaShareSquare } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa'
import { FaBolt } from 'react-icons/fa'
import { FaCrosshairs } from 'react-icons/fa';
import { IoArrowRedoOutline } from 'react-icons/io5';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
  
  function Post({postData}) {
    return (
      <div>
        <div className=" bg-white my-3 mx-1 rounded-lg sm:rounded-2xl shadow-lg">
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
              <div className = "ml-auto mr-6">
                <IoArrowRedoOutline size = {25} onClick = {() => {}}/>
              </div>
            </div>
            <div className="mt-0 ml-3 font-normal text-base">
              {postData.postDesc}
            </div>
            <div className="mt-2">
              {/* <img src = {img1} className="" /> */}
              <AwesomeSlider bullets = {false}> 
                <div data-src={postData.postImages[0]} />
                <div data-src={postData.postImages[1]} />
              </AwesomeSlider>
              
            </div>
            <div className="ml-4 mt-3 mb-4">
              <ReactionSection postReactionsData={postData.postReactions}/>
            </div>
          </div>
            </div>
          </div>
    );
  }

  function ReactionButton({reactionText}) {
    return (
      <button className="rounded-full py-2 px-3">
        {reactionText}
      </button>
    );
  }
  
  function ReactionSection({postReactionsData}) {
    return (
      <div className="grid-flow-row text-xs">
        {/* <ReactionButton reactionText="15 Good" />
        <ReactionButton reactionText="7 Awesome"/>
        <ReactionButton reactionText="5 Excellent"/>
        <ReactionButton reactionText="1 Bad"/> */}
        <button className="bg-yellow-500 rounded-full py-2 px-3 mr-2 mt-1">
        {postReactionsData['good']} Good
        </button>
        <button className="bg-yellow-400 rounded-full py-2 px-3 mr-2 mt-1">
        {postReactionsData['awesome']} Awesome
        </button>
        <button className="bg-yellow-300 rounded-full py-2 px-3 mr-2 mt-1">
        {postReactionsData['excellent']} Excellent
        </button>
        <button className="bg-yellow-200 rounded-full py-2 px-3 mr-2 mt-1">
        {postReactionsData['bad']} Bad
        </button>
      </div>
    );
  }

  export default Post;