import signUpImg from '../assets/sign-up-img.jpg';
import { Link } from 'react-router-dom';

function Login() {

	document.body.style = 'background: rgba(243, 244, 246);';

	return (
		<div className="bg-white mt-8 m-auto sm:w-8/12 w-11/12 rounded-lg shadow-lg">
			<div className="px-2 py-6">
				<div className="text-center">
					<div className="flex gap-4 justify-center">
						{/* <div className="text-xl justify-self-start">
							LOGO
						</div> */}
						<div className="text-4xl font-bold mb-4">
							Log In
						</div>
					</div>
					<div className="text-4xl mt-2 mb-4">
						Stay Motivated
					</div>
				</div>
				<div className="grid grid-rows-1 grid-flow-col text-lg">
						<form>
							<div className=" flex-col sm:ml-12 sm:w-full">

								<div className="px-3 sm:px-0">
									<div className="text-gray-700 text-base">Email</div>
									<input className="mt-2 px-2 py-1 w-full rounded-md border border-gray-500 focus:outline-none focus:border-black sm:w-4/5" type="text"/>
								</div>

								<div className="px-3 sm:px-0">
									<div className="mt-3 text-gray-700 text-base">Password</div>
									<input className="mt-2 px-2 py-1 w-full rounded-md border border-gray-500 focus:outline-none focus:border-black sm:w-4/5" type="Password"/>
								</div>
								
							</div>
							<div className="flex flex-col items-center">
								<div className="text-base mt-5 ml-3 hover:text-brand-primary hover:underline cursor-pointer">
									Forgotten Password ?
								</div>

								<button className="bg-yellow-500 px-12 py-2 mt-6 rounded-full text-white text-xl font-bold">
									Log In
								</button>

								
									<div className="mt-6 text-base">
										Don't have an account ?
										<section className="text-yellow-500 font-bold inline underline">
											<Link to="/sign-up">
												Sign Up
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
	);
}

export default Login;