import signUpImg from '../assets/sign-up-img.jpg';
import { MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import { useHistory } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { signUp } from '../slices/aurhSlice';
import './sign_up.css';
import { useState } from 'react';

// import { useFormik } from 'formik';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

function SignUp() {

	document.body.style = 'background: rgba(243, 244, 246);';

	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const dispatch = useDispatch();
  const { auth, status } = useSelector((state) => state.auth);

	let history = useHistory();

	const signUpPostReq = () => {

		dispatch(signUp({email: email, password: password, username: username, confirmPassword: confirmPassword}))
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
					Sign up Completed!
				</div>
			</div>
		)

		if(auth.status === 'fail') return (
			<div className="bg-gray-100 rounded-md mt-2 py-2 px-3">
				<div className="text-red-500 text-center text-xl font-bold">
					Couldn't Sign up!
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

		// const formik = useFormik({
		// 	initialValues:{
		// 		Username:'',
		// 		Email:'',
		// 		Password:''
		// 	},
		// 	validationSchema: yup.object({
		// 		Username: yup.string()
		// 			.max(20, 'Name should not exceed 20 Characters')
		// 			.required('Please Enter Employee Name'),	
		// 		Email: yup.string()	
		// 			.email('Invalid email address')
		// 			.required('Please Enter Email Id'),
		// 		Password: yup.string()
		// 			.min(8, 'Password must be more than 8 characters')
		// 			.required('Please enter password')
		// 	}),
		// 	onSubmit: values => { 
		// 		alert(JSON.stringify(values));
		// 	}
		// });


	return (
		<div>
			{/* explore button in desktop screens */}
			{auth.status === 'success' ? pushToHome() : null}

		<div className="hidden sm:fixed sm:flex sm:items-center h-full mr-6 right-0">
			{/* TODO: add redirect to '/' */}
			<Link to="/">
				<div className="bg-white flex items-center hover:bg-brand-third hover:text-white 	py-3 px-3 rounded-lg shadow-md cursor-pointer">
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
						
						<Formik initialValues= {{

    					  Username: '',
    					  Email: '',
								Password: '',
								ConfirmPassword: ''

    					}} validationSchema = { yup.object({

    					  Username: yup.string()
									.max(20,'Name should not exceed 20 Characters')
									.required('Please Enter Username'),

								Email: yup.string()
    					    .email('Invalid email address')
    					    .required('Please Enter Email'),

								Password: yup.string()
									.min(8, 'Password must be more than 8 characters')
    					    .required('Please Enter Password'),

								ConfirmPassword: yup.string()
									.min(8, 'Password must be more than 8 characters')
    					  	.required('Please Enter Confirm Password')
									.when("Password", {
										is: val => (val && val.length > 0 ? true : false),
										then: yup.string().oneOf(
											[yup.ref("Password")],
											"Both Password must be matched"
										)
									})
							
    					})} onSubmit= {values => {
    					  alert(JSON.stringify(values));
    					}}>

							{({ isSubmitting, isValid, dirty }) => (
								<div>
									<div className="flex-col sm:ml-12">

								<div className="px-3 sm:px-0">
									<div className="text-gray-700 text-base">Email</div>
									<Field 
										className="mt-2 px-2 py-1 w-full rounded-md border border-gray-500 	focus:outline-none focus:border-black sm:w-4/5" 
										type="text" 
										name="Email" 
										onKeyUp={
											event => setEmail(event.target.value)
										}
									 ></Field>
									<div className="text-red-500 text-sm font-medium">
									<ErrorMessage name="Email"></ErrorMessage>
									</div>
								</div>

								<div className="px-3 sm:px-0">
									<div className="mt-3 text-gray-700 text-base">Username</div>
									<Field 
										className="mt-2 px-2 py-1 w-full rounded-md border border-gray-500 	focus:outline-none focus:border-black sm:w-4/5" 
										type="text" 
										name="Username" 
										onKeyUp={
											event => setUsername(event.target.value)
										}
									></Field>
									<div className="text-red-500 text-sm font-medium">
										<ErrorMessage name="Username"></ErrorMessage>
									</div>
								</div>

								<div className="px-3 sm:px-0">
									<div className="mt-3 text-gray-700 text-base">Password</div>
									<Field 
										className="mt-2 px-2 py-1 w-full rounded-md border border-gray-500 	focus:outline-none focus:border-black sm:w-4/5" 
										type="Password" 
										name="Password" 
										onKeyUp={
											event => setPassword(event.target.value)
										}
									></Field>
									<div className="text-red-500 text-sm font-medium">
										<ErrorMessage name="Password"></ErrorMessage>
									</div>
								</div>

								<div className="px-3 sm:px-0">
									<div className="mt-3 text-gray-700 text-base">Confirm Password</div>
									<Field 
										className="mt-2 px-2 py-1 w-full rounded-md border border-gray-500 	focus:outline-none focus:border-black sm:w-4/5" 
										type="Password" 
										name="ConfirmPassword" 
										onKeyUp={
											event => setConfirmPassword(event.target.value)
										}
									></Field>
									<div className="text-red-500 text-sm font-medium">
										<ErrorMessage name="ConfirmPassword"></ErrorMessage>
									</div>
								</div>
								
							</div>
							<div className="flex flex-col items-center">
								<div className="text-sm mt-5 ml-3">
									By signing in, you agree to the Motivational <section className="text-yellow-500 inline"><a href="" className="hover:underline hover:text-yellow-500">Privacy Policy</a></section> & <section className="text-yellow-500 inline"><a hred="" className="hover:underline hover:text-yellow-500">Cookie Policy.</a></section> 
								</div>

								{/* <Link to="/otp-validation"> */}

									<button type="button" className="bg-yellow-500 px-12 py-2 mt-6 rounded-full text-white 	text-xl font-bold" disabled={ !isValid || !dirty} onClick={() => {
										signUpPostReq()
									}}>
										Sign Up
									</button>
								{/* </Link> */}
									{renderStates()}

									{/* if all fields are not filled correctly this message shows */}
									{!isValid ? 
									<div className="bg-gray-100 rounded-md mt-2 py-2 px-2">
										<div className="text-red-500 text-center">
											Fill all the required fields
										</div>
									</div>
									 : null}
								
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
								</div>
							)}

						</Formik>

						<img src={signUpImg} className="hidden sm:block w-80 justify-self-end" />
					</div>
			</div>
		</div>

		{/* explore button in mobile screens */}

		<div className="sm:hidden flex items-center justify-center mt-2 pb-2 h-full mr-6">
			{/* TODO: add redirect to '/' */}
			<Link to="/home">
				<div className="bg-white flex items-center hover:bg-brand-third hover:text-white 	py-3 px-3 rounded-lg shadow-md cursor-pointer">
					<div className="text-xl font-semibold">
						Explore
					</div>
					<MdChevronRight size="34" className="rightIcon" />
				</div>
			</Link>
		</div>
		</div>
	);
}

export default SignUp;