import signUpImg from '../assets/sign-up-img.jpg';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logIn } from '../slices/aurhSlice';
import PulseLoader from "react-spinners/PulseLoader";
import { useHistory } from "react-router-dom";

function Login() {

	document.body.style = 'background: rgba(243, 244, 246);';

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();
  const { auth, status } = useSelector((state) => state.auth);

	let history = useHistory();

	const loginRequest = () => {

		dispatch(logIn({email: email, password: password}))
    .unwrap().then((originalPromiseResult) => {
      console.log(originalPromiseResult);
    }).catch((rejectedValueOrSerializedError) => {
      console.log(rejectedValueOrSerializedError);
    });
		
	}

	const renderStates = () => {
		if (status === 'loading') return (
      <div className="flex justify-center mt-8">
        <PulseLoader size={10} color="#ffa500" />
        {console.log('loading')}
      </div>)
    if (status === 'failed') return <p>Cannot display recipes...</p> 

		if(auth.status === 'success') return (
			<div className="bg-gray-100 rounded-md mt-2 py-2 px-12">
				<div className="text-brand-green text-center text-xl font-bold">
					Log in Completed!
				</div>
			</div>
		)

		if(auth.status === 'fail') return (
			<div className="bg-gray-100 rounded-md mt-2 py-2 px-3">
				<div className="text-red-500 text-center text-xl font-bold">
					Couldn't Log in!
				</div>
				<div className="text-red-500 text-center">
					{auth.message}
				</div>
			</div>
		)

	}

	function pushToHome() {
		// history.push({
		// 	pathname: '/',
		// });
		history.replace({
			pathname: '/'
		})
	}

	return (
		<div className="bg-white mt-8 m-auto sm:w-8/12 w-11/12 rounded-lg shadow-lg">
			{auth.status === 'success' ? pushToHome() : null}
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
									<input className="mt-2 px-2 py-1 w-full rounded-md border border-gray-500 focus:outline-none focus:border-black sm:w-4/5" type="text" onChange={
										event => setEmail(event.target.value)
									}/>
								</div>

								<div className="px-3 sm:px-0">
									<div className="mt-3 text-gray-700 text-base">Password</div>
									<input className="mt-2 px-2 py-1 w-full rounded-md border border-gray-500 focus:outline-none focus:border-black sm:w-4/5" type="Password" onChange={
										event => setPassword(event.target.value)
									}/>
								</div>
								
							</div>
							<div className="flex flex-col items-center">
								<div className="text-base mt-5 ml-3 hover:text-brand-primary hover:underline cursor-pointer">
									Forgotten Password ?
								</div>

								<button type="button" className="bg-yellow-500 px-12 py-2 mt-6 rounded-full text-white text-xl font-bold" onClick={() => {
									loginRequest();
								}}>
									Log In
								</button>
								{renderStates()}
								
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