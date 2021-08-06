import React, {useState} from 'react';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.png';

import {SliderData} from './image_slider_data';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft, FaCircle} from 'react-icons/fa';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import './image_slider.css';

// function ImgSliderTest() {

// 	const properties = {
// 		// duration: 100,
// 		autoplay: false,
// 		transitionDuration: 500,
// 		// arrows: true,
// 		// infinite: true,
// 		easing: "ease",
// 		indicators:(i) => 
// 		<div className="flex">
// 			<div className="absolute flex left-0 top-0 mr-2 cursor-pointer">{i + 1}</div>
// 		</div>
// 	};

// 	return(
// 		<div className="w-1/2">
// 			<Slide {...properties} >
// 				<img src={img1} className="" />
// 				<img src={img2} />
// 			</Slide>
							
// 		</div>
// 	);
// }

function ImgSliderTest() {

	const [current, setCurrent] = useState(0);
	const length = SliderData.length; 

	if(!Array.isArray(SliderData) || SliderData.length <= 0) {
		return null;
	}

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	}

	console.log(current);

	return(
		// <div className="bg-red-200 relative flex flex-col w-1/2 h-96">
		<div className="relative justify-center w-1/2 h-96 mt-12 left-12 z-10">
			<MdChevronLeft size="38" className="absolute top-1/2 left-1 z-10 cursor-pointer" onClick={prevSlide} />
			<MdChevronRight size="38" className="absolute top-1/2 right-1 z-10 cursor-pointer" onClick={nextSlide} />
			{SliderData.map((slide, index) => {
				return (
					<div className={`${index === current ? "slide active" : "slide"}`}>
					{index === current && (<img src={slide.image} className="w-full h-96 object-cover object-center rounded-md" />)}
					</div>
				);
			}
			)}
			<div className="absolute bottom-1 left-0 right-0 flex justify-center gap-2">
		 	{SliderData.map((slide, index) => {
				return(
					<FaCircle color={`${index === current ? "#ffa500" : ""}`} className="z-20" key={index} />
				);
			})}			
		</div>
		</div>
		// <div className="flex justify-center gap-2">
		// 	{SliderData.map((slide, index) => {
		// 		return(
		// 			<FaCircle color={`${index === current ? "#ffa500" : ""}`} className="z-20" key={index} />
		// 		);
		// 	})}			
		// </div>
		// </div>
	);
}

export default ImgSliderTest;