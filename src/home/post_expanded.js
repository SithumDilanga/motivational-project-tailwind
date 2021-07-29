import React from 'react';
import img1 from '../assets/img1.jpg';
import postData from '../fakeApiData';
import { Link } from 'react-router-dom';

import { IoArrowRedoOutline } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';

import { useHistory } from "react-router-dom";

function PostExapanded() {

	document.body.style = 'background: rgba(243, 244, 246);';

	let history = useHistory();

  function closePostExpanded() {
    history.push("/");
  }

  return (
    <div className="grid grid-cols-3 h-full w-full ">
      <div className="h-full col-span-2 border-r border-black">
				<div className="grid grid-rows-5 h-screen">
					<div className="bg-black row-span-4">
						{/* image goes here */}
						<MdClose color="white" size="32" className="fixed m-2 cursor-pointer" onClick={closePostExpanded} />
						<img src={img1} className="h-auto max-h-full m-auto" />
					</div>
					<div className="row-span-1 justify-self-center">
						<div className="mt-4 ml-4">
							<ReactionSection postReactionsData={postData[0].postReactions} />
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-between bg-white m-2 h-full col-span-1 rounded-md shadow-xl">
				<div className="flex items-center ml-3 mt-3 sm:ml-4 sm:mt-6 mb-3">
      	  <img src={img1} className="w-12 h-12 rounded-full object-cover object-cente"/>
      	  <div className="flex-col mt-1 ml-4">
      	    <div className="text-base font-bold">
      	      {postData[0].username}
      	    </div>
      	    <div className="text-sm text-gray-500">
      	      {postData[0].date}
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
						{postData[0].postDesc}
					</div>
      	</div>
				<div className="mt-8 mb-5 ml-2 mr-2">
					<div className="flex flex-col items-center bg-gray-200 px-2 py-12 rounded-md">
						<div className="text-2xl font-bold">
							Still didn’t feel motivated ?
						</div>	
						<button className="bg-brand-primary mt-2 py-2 px-7 text-white text-xl font-bold rounded-full">
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

function ReactionSection({postReactionsData}) {
	return (
		<div className="grid-flow-row text-xs">
			{/* <ReactionButton reactionText="15 Good" />
			<ReactionButton reactionText="7 Awesome"/>
			<ReactionButton reactionText="5 Excellent"/>
			<ReactionButton reactionText="1 Bad"/> */}
			<button className="text-sm bg-yellow-500 rounded-full py-2 px-4 mr-2 mt-1">
			{postReactionsData['good']} 
				&nbsp;Good
			</button>
			<button className="text-sm bg-yellow-400 rounded-full py-2 px-4 mr-2 mt-1">
			{postReactionsData['awesome']} 
				&nbsp;Awesome
			</button>
			<button className="text-sm bg-yellow-300 rounded-full py-2 px-4 mr-2 mt-1">
			{postReactionsData['excellent']} 
				&nbsp;Excellent
			</button>
			<button className="text-sm bg-yellow-200 rounded-full py-2 px-4 mr-2 mt-1">
			{postReactionsData['bad']} 
				&nbsp;Bad
			</button>
		</div>
	);
}

export default PostExapanded;