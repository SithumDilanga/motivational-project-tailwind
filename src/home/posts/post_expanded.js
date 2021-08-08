import React, {useState} from 'react';
import { useEffect } from "react";
import img1 from '../../assets/img1.jpg';
import postData from '../../fakeApiData';
import { Link } from 'react-router-dom';
import ReactionSection from './reaction_selection';

import { IoArrowRedoOutline } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft, FaCircle} from 'react-icons/fa';
import {SliderData} from './image_slider_data';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import { useHistory, useLocation } from "react-router-dom";

function PostExapanded() {

	document.body.style = 'background: rgba(243, 244, 246);';

	let history = useHistory();
	const location = useLocation();

	useEffect(() => {
		console.log(location.state.postDetails.username);
	}, [location]);

  function closePostExpanded() {
    // history.push("/");
		history.goBack();
  }

	// -------- image slider -----------

	const [current, setCurrent] = useState(0);
	const length = location.state.postDetails.postImages.length; 

	if(!Array.isArray(location.state.postDetails.postImages) || location.state.postDetails.postImages.length <= 0) {
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
    <div className="h-full w-full sm:grid sm:grid-cols-3">
      <div className="h-full sm:col-span-2 border-r border-black">
				<div className="grid sm:grid-rows-5 sm:h-screen">
					<div className="bg-black sm:row-span-4">
						{/* image goes here */}
						{/* <img src={img1} className="h-auto max-h-full m-auto" /> */}
						<div className="relative">
							<MdClose color="white" size="32" className="fixed m-2 cursor-pointer z-20" onClick={closePostExpanded} />
							{/* TODO:find a way to contain images in the slider */}
							{/* <AwesomeSlider bullets = {false} fillParent={false} > 
            	  <div data-src={location.state.postDetails.postImages[0]} 	className="" />
            	  <div data-src={location.state.postDetails.postImages[1]} />
            	</AwesomeSlider> */}

							<div className="gridContainer relative justify-center z-10">
		          		<FaArrowAltCircleLeft size="28" color="white" className="absolute top-1/2 left-2 z-10 cursor-pointer" onClick={prevSlide} />
		          		<FaArrowAltCircleRight size="28" color="white" className="absolute top-1/2 right-2 z-10 cursor-pointer" onClick={nextSlide} />
		          		{location.state.postDetails.postImages.map((slide, index) => {
		          			return (
		          				<div className={`photo ${index === current ? "slide active" : 	"slide"}`}>
		          				{index === current && (<img src={slide} className="" />)}
		          				</div>
		          			);
		          		}
		          		)}
		          		<div className="absolute bottom-1 left-0 right-0 flex justify-center gap-2">
		          	 	{location.state.postDetails.postImages.map((slide, index) => {
		          			return(
		          				<FaCircle color={`${index === current ? "#ffa500" : ""}`} className="z-20" key={index} />
		          			);
		          		})}			
		          	</div>
		          </div>

						</div>
					</div>
					<div className="row-span-1 justify-self-center">
						<div className="mt-4 ml-4">
							<ReactionSection postReactionsData={postData[0].postReactions} />
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between bg-white m-2 mt-5 h-full sm:col-span-1 rounded-md shadow-xl">
				<div className="flex items-center ml-3 mt-3 sm:ml-4 sm:mt-6 mb-3">
      	  <img src={img1} className="w-12 h-12 rounded-full object-cover object-center"/>
      	  <div className="flex-col mt-1 ml-4">
      	    <div className="text-base font-bold">
      	      {location.state.postDetails.username}
      	    </div>
      	    <div className="text-sm text-gray-500">
      	      {location.state.postDetails.date}
      	    </div>
      	  </div>
      	  <div className = "ml-auto mr-6">
      	    <Link to="/post-expanded">
      	      <IoArrowRedoOutline size = {25} onClick = {() => {}}/>
      	    </Link>
      	  </div>
      	</div>
				<div className="mb-auto ml-4 font-normal text-base">
      	  <div>
						{location.state.postDetails.postDesc}
					</div>
      	</div>
				<div className="mt-8 mb-5 ml-2 mr-2">
					<div className="flex flex-col items-center bg-gray-200 px-2 py-12 rounded-md">
						<div className="text-2xl font-bold">
							Still didn’t feel motivated ?
						</div>	
						<button className="bg-brand-primary mt-2 py-2 px-7 text-white text-xl font-bold rounded-full outline-none">
							Sign Up
						</button>
						<div className="text-xl mt-2">
							Sign Up and get boost yourself 
						</div>
					</div>
				</div>
			</div>
    </div>
  );
}

export default PostExapanded;