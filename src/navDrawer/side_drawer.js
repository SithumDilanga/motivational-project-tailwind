import {React, useState} from 'react';
import './side_drawer.css';

import HomeWorkRounded from '@material-ui/icons/HomeWorkRounded';
import Notification from '@material-ui/icons/Notifications';
import { FaHandHoldingHeart } from 'react-icons/fa';

function SideDrawer({show}) {

	const [selectedNavTab, setSelectedNavTab] = useState('home');

	let drawerClasses = "sideDrawer";
	if(show) {
		drawerClasses = "sideDrawer open";
	}

	return (
		<nav className={`${drawerClasses} bg-white h-full w-4/6 fixed shadow-lg top-0 left-0 z-20`}>
			<ul className="flex flex-col p-4 h-full list-none">
				<li className="">
					<button className={`flex items-center mt-8 w-full pl-4 py-2 outline-none  ${selectedNavTab === 'home' ? "bg-yellow-500" : ""} rounded-full`} onClick={() => setSelectedNavTab('home')}>
						{/* <HomeWorkRounded style={{fontSize: 38}} /> */}
						{selectedNavTab === 'home' ? <HomeWorkRounded style={{fontSize: 38, color:"white"}} /> : 	<HomeWorkRounded style={{ fontSize: 38}} />}
						<div className={`font-face-gm text-xl ml-2 ${selectedNavTab === 'home' ? "text-white" : "text-black"}`}>
							Home
						</div>
					</button>
				</li>

				<li className="">
					<button className={`flex items-center mt-8 w-full pl-4 py-2 outline-none  ${selectedNavTab === 'notifications' ? "bg-yellow-500" : ""} rounded-full`} onClick={() => setSelectedNavTab('notifications')}>

						{selectedNavTab === 'notifications' ? <Notification style={{fontSize: 38, color:"white"}} /> : 	<Notification style={{ fontSize: 38}} />}
						
						<div className={`font-face-gm text-xl ml-2 ${selectedNavTab === 'notifications' ? "text-white" : "text-black"}`}>
							Notifications
						</div>
					</button>
				</li>

				<li className="">
					<button className={`flex items-center mt-8 w-full pl-4 py-2 outline-none  ${selectedNavTab === 'donate' ? "bg-yellow-500" : ""} rounded-full`} onClick={() => setSelectedNavTab('donate')}>

						{selectedNavTab === 'donate' ? <FaHandHoldingHeart size="38" color="white"/> : 	<FaHandHoldingHeart size="38" />}
						
						<div className={`font-face-gm text-xl ml-2 ${selectedNavTab === 'donate' ? "text-white" : "text-black"}`}>
							Donate Us
						</div>
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default SideDrawer;