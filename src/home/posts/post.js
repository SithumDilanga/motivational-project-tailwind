import React, {useEffect, useState} from 'react';
import img1 from '../../assets/img1.jpg';
// import img2 from './assets/img2.png';
import { RiShareForwardLine } from 'react-icons/ri'
import { FaShareSquare } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa'
import { FaBolt } from 'react-icons/fa'
import { FaCrosshairs } from 'react-icons/fa';
import { IoArrowRedoOutline } from 'react-icons/io5';
import { MdBookmarkBorder, MdDeleteForever, MdBookmark, MdClose } from 'react-icons/md';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ReactionSection from './reaction_selection';

import { Link } from 'react-router-dom';
import PostExapanded from './post_expanded';
import { useHistory } from "react-router-dom";
import './post.css';

import {SliderData} from './image_slider_data';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft, FaCircle} from 'react-icons/fa';
import './image_slider.css';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

  
  function Post({postData, isPostOwner}) {

    // ----------------- delete post pop up -----------------

    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const closeDeletePopup = () => {
      setIsOpenPopup(false);
    }

    // post delete alert dialog content styles
    const contentStyle = { 
      'border-radius': '8px',
      'width': '40%'
    };

    // ----------------- End delete post pop up -----------------

    // const [isPostOpen, setIsPostOpen] = useState(false);

    // const togglePostPopUp = () => {
    //   setIsPostOpen(!isPostOpen);
    //   console.log('pop up!');
    // }

    // ------------ image cache ----------------
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const images = postData.postImages;
      cacheImages(images);
    }, []);

    const cacheImages = async (srcArray) => {
      const promises = await srcArray.map((src) => {
        return new Promise(function(resolve, reject) {
          const img = new Image();

          img.src = src;
          img.onload = resolve();
          img.onerror = reject();
        });
      });

      await Promise.all(promises);
      setIsLoading(false);
    }

    // ------------ End image cache ----------------


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


    // -------- image slider -----------

    const [current, setCurrent] = useState(0);
	  const length = postData.postImages.length;

	  if(!Array.isArray(postData.postImages) || postData.postImages.length <= 0) {
	  	return null;
	  }

	  const nextSlide = () => {
	  	setCurrent(current === length - 1 ? 0 : current + 1);
	  }

	  const prevSlide = () => {
	  	setCurrent(current === 0 ? length - 1 : current - 1);
	  }

    // -------- End image slider -----------    

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
                  {/* {postData.date} */}
                  jun 2021 8:32 p.m
                </div>
              </div>
              <div className = "flex items-center gap-3 ml-auto mr-6">
                {/* <Link to="/post-expanded"> */}

                {isPostOwner ? 
                <button className="bg-brand-third flex items-center gap-2 px-2 py-1 rounded-md hover:bg-brand-secondary" onClick={() => setIsOpenPopup(true)}>
                  <MdClose className="w-3 h-4 sm:w-4 sm:h-4" />
                  <div className="hidden text-base font-normal sm:block">
                    Delete
                  </div>
                </button> : null}

                {/* <button onClick={() => setIsOpenPopup(true)}>
                  click
                </button> */}

                {/* Delete post popup confirm dialog */}

                <Popup {...{contentStyle, }} modal closeOnDocumentClick lockScroll={true} open={isOpenPopup} onClose={closeDeletePopup} position="right center">
                  <div className="flex flex-col ml-8 mt-6">
                    <div className="text-xl font-bold">
                      Are you sure want to delete this post ?
                    </div>
                    <div className="flex items-center gap-2 mt-5">
                      <MdDeleteForever size="46" color="red"/>
                      <div className="text-base font-medium mr-8">
                        This will peremanently delete the post and this cannot be undone
                      </div>
                    </div>
                    <div className="flex justify-end gap-1 mt-6 mb-3 mr-3">
                      <button className="px-6 py-1 text-lg font-medium rounded-md hover:bg-yellow-200" onClick={closeDeletePopup}>
                        Cancel
                      </button>
                      <button className="bg-brand-secondary px-8 py-1 text-white text-lg font-medium rounded-md hover:bg-brand-primary">
                        Yes
                      </button>
                    </div>
                  </div>
                </Popup>

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
              {/* <AwesomeSlider bullets = {false} className="cursor-pointer" > 
                <div data-src={postData.postImages[0]} onClick={openPostExpanded} />
                <div data-src={postData.postImages[1]} />
              </AwesomeSlider> */}
              
              {/* SliderData.map  img src={slide.image} */}
              
              {/* ------------ Image Slider -------- */}

              <div className="relative justify-center h-96 z-10">
		          	<FaArrowAltCircleLeft size="28" color="white" className="absolute top-1/2 left-2 z-10 cursor-pointer" onClick={prevSlide} />
		          	<FaArrowAltCircleRight size="28" color="white" className="absolute top-1/2 right-2 z-10 cursor-pointer" onClick={nextSlide} />
		          	{isLoading ? (<div>loading...</div>) : postData.postImages.map((slide, index) => {
		          		return (
		          			<div className={`${index === current ? "slide active" : "slide"}`}>
		          			{index === current && (<img src={slide} className="w-full h-96 object-cover object-center cursor-pointer" onClick={openPostExpanded} />)}
		          			</div>
		          		);
		          	}
		          	)}
		          	<div className="absolute bottom-1 left-0 right-0 flex justify-center gap-2">
		           	{postData.postImages.map((slide, index) => {
		          		return(
		          			<FaCircle color={`${index === current ? "#ffa500" : ""}`} className="z-20" key={index} />
		          		);
		          	})}			
		          </div>
		          </div>

              {/* ------------ End Image Slider -------- */}

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