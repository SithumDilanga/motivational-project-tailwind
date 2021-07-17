import img1 from '../assets/img1.jpg';
import img3 from '../assets/img3.jpg';

function UserProfile() {
	return (
		<div className="m-auto w-8/12 ">
			<div className=" relative bg-gray-400 m-2 rounded-lg">
				<div className="">
					<img src={img1} className="h-64 w-max rounded-t-lg object-cover object-center" />
				</div>
				<div className="pl-6">
					<img src={img3} className=" absolute top-2/3 w-32 h-32 rounded-full border-4 border-white object-cover object-center"/>
				</div>
			</div>
		</div>
	);
}

export default UserProfile;