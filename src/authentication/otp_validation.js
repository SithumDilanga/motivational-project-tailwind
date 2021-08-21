import React from 'react';
import signUpImg from '../assets/sign-up-img.jpg';
import { MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './sign_up.css';

function OTPValidation() {
  return (
		<div className="pb-4 sm:pb-0">
		<div className="bg-white mt-8 m-auto sm:w-8/12 w-11/12 rounded-lg shadow-lg">
			<div className="px-2 py-6">
				<div className="text-center">
					<div className="flex gap-4 justify-center">
						{/* <div className="text-xl justify-self-start">
							LOGO
						</div> */}
						<div className="text-4xl font-bold mb-4">
							Sign Up
						</div>
					</div>
					<div className="text-4xl mt-2 mb-4">
						Stay Motivated
					</div>
				</div>
				<div className="grid grid-rows-1 grid-flow-col text-lg">
						<form>

							<div className="flex-col sm:ml-12">
								<div className="px-3 sm:px-0">
									<div className="text-gray-700 text-base">OTP Code</div>
									<input className="mt-2 px-2 py-1 w-full rounded-md border border-gray-500 focus:outline-none focus:border-black sm:w-4/5" type="text"/>
								</div>
								<div className="ml-3 mr-3 sm:ml-0">
									<button className="bg-yellow-500 justify-self-end px-9 py-1 mt-6 	rounded-full text-white text-lg font-bold">
										Submit
									</button>
									<div className="bg-yellow-200 mt-12 px-4 py-2 text-base rounded-md">
										Check your Email. We have sent the code to sdlive@gmail.com
									</div>
								</div>
							</div>
							<img src={signUpImg} className="sm:hidden" />
						</form>
						<img src={signUpImg} className="hidden sm:block w-80 justify-self-end" />
					</div>
			</div>
		</div>
		</div>
	);
}

export default OTPValidation;