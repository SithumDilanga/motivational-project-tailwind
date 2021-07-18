import img1 from '../assets/img1.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import Tabs from "./tab_components/tabs"; 
import TabContent from './tab_components/tab_content';

function UserProfile() {

	return (
		<div className="m-auto sm:w-8/12">
			<div className=" relative bg-white m-2 rounded-lg">
				<div className="flex-col">
					<div className="relative">
						<img src={img4} className="h-48 w-max rounded-t-lg object-cover object-center sm:h-64" />
						<div className="pl-6">
							<img src={img3} className="absolute top-2/3 w-28 h-28 rounded-full border-4 border-white object-cover object-center sm:w-32 sm:h-32"/>
						</div>
					</div>
					<div>  {/* name and tag*/}
						<div className="mt-12 ml-10 text-xl font-bold">
							Jane Jone
						</div>
						<div className="ml-9 text-sm">
							@jane_jone
						</div>
					</div>
					<div className="ml-9 mt-4 mr-2 text-sm sm:text-base">
						Passionte learning new technologies. <section className="inline text-yellow-500 font-medium">#Motivation</section> comes from the heart and never give up. If you fail stand up and try again. <section className="inline text-yellow-500 font-medium">#NeverGiveUp</section>
					</div>
					<div className="">
						<Tabs />
					</div>
				</div>
				</div>
		</div>
	);
}


export default UserProfile;