import signUpImg from '../assets/sign-up-img.jpg';
import { MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './sign_up.css';

function SignUp() {

	document.body.style = 'background: rgba(243, 244, 246);';

	return (
		<div>
		<div className="fixed flex items-center h-full mr-6 right-0">
			{/* TODO: fix route issue here */}
			<Link to="/home">
				<div className="bg-white hover:bg-brand-third hover:text-white flex items-center 	py-3 px-3 rounded-lg shadow-md cursor-pointer">
					<div className="text-xl font-semibold">
						Explore
					</div>
					<MdChevronRight size="34" className="rightIcon" />
				</div>
			</Link>
		</div>
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
									<div className="text-gray-700 text-base">Email</div>
									<input className="mt-2 px-2 py-1 w-full rounded-md border border-gray-500 focus:outline-none focus:border-black sm:w-4/5" type="text"/>
								</div>

								<div className="px-3 sm:px-0">
									<div className="mt-3 text-gray-700 text-base">Username</div>
									<input className="mt-2 px-2 py-1 w-full rounded-md border border-gray-500 focus:outline-none focus:border-black sm:w-4/5" type="text"/>
								</div>

								<div className="px-3 sm:px-0">
									<div className="mt-3 text-gray-700 text-base">Password</div>
									<input className="mt-2 px-2 py-1 w-full rounded-md border border-gray-500 focus:outline-none focus:border-black sm:w-4/5" type="Password"/>
								</div>
								
							</div>
							<div className="flex flex-col items-center">
								<div className="text-sm mt-5 ml-3">
									By signing in, you agree to the Motivational <section className="text-yellow-500 inline"><a href="" className="hover:underline hover:text-yellow-500">Privacy Policy</a></section> & <section className="text-yellow-500 inline"><a hred="" className="hover:underline hover:text-yellow-500">Cookie Policy.</a></section> 
								</div>

								<button className="bg-yellow-500 px-12 py-2 mt-6 rounded-full text-white text-xl font-bold">
									Sign Up
								</button>

								
									<div className="mt-6 text-base">
										Already have an Account? 
										<section className="text-yellow-500 font-bold inline underline">
											<Link to="/login">
												Sign In
											</Link>
										</section>
									</div>
								<img src={signUpImg} className="sm:hidden" />
							</div>
						</form>
						<img src={signUpImg} className="hidden sm:block w-80 justify-self-end" />
					</div>
			</div>
		</div>
		</div>
	);
}

export default SignUp;