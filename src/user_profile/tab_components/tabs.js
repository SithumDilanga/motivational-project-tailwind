// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Tab from './tab';

import { useState } from "react";
import TabContent from "./tab_content";

// class Tabs extends Component {
//   static propTypes = {
//     children: PropTypes.instanceOf(Array).isRequired,
//   }

//   constructor(props) {
//     super(props);

//     this.state = {
//       activeTab: this.props.children[0].props.label,
//     };
//   }

//   onClickTabItem = (tab) => {
//     this.setState({ activeTab: tab });
//   }

//   render() {
//     const {
//       onClickTabItem,
//       props: {
//         children,
//       },
//       state: {
//         activeTab,
//       }
//     } = this;

//     return (
//       <div className="tabs">
//         <ol className="flex-row">
//           {children.map((child) => {
//             const { label } = child.props;

//             return (
//               <Tab
//                 activeTab={activeTab}
//                 key={label}
//                 label={label}
//                 onClick={onClickTabItem}
//               />
//             );
//           })}
//         </ol>
//         <div className="tab-content">
//           {children.map((child) => {
//             if (child.props.label !== activeTab) return undefined;
//             return child.props.children;
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default Tabs;

function Tabs() {

	const [selectedTab, setSelectedTab] = useState('posts');
	console.log(selectedTab);

	return (
		<div>
			<div className="ml-9 mt-4 mr-9 pb-2">
				<button 
					className={`mr-0 px-3 py-2 text-sm font-medium border-b-2 hover:bg-gray-100 ${selectedTab == 'posts' ? "text-yellow-500 border-yellow-500" : "text-black border-white"} sm:mr-12 sm:text-base`} 
					onClick={ () => setSelectedTab('posts') } >
					POSTS
				</button>
				<button 
					className={`mr-0 px-3 py-2 text-sm font-medium border-b-2 hover:bg-gray-100 ${selectedTab == 'bookmarks' ? "text-yellow-500 border-yellow-500" : "text-black border-white"} sm:mr-12 sm:text-base`} 
					onClick={ () => setSelectedTab	('bookmarks')}
				>
					BOOKMARKS
				</button>
				<button 
				className={`mr-0 px-3 py-2 text-sm font-medium border-b-2 hover:bg-gray-100 ${selectedTab == 'others' ? "text-yellow-500 border-yellow-500" : "text-black border-white"} sm:mr-12 sm:text-base`} 
					onClick={ () => setSelectedTab('others')}>
					OTHERS
				</button>
			</div>
			<div>
				<TabContent currentTab={selectedTab}/>
			</div>
		</div>
	);
}


export default Tabs;