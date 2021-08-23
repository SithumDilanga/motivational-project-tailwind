import React from 'react';
import error404 from '../assets/error404.jpg';

function Error404Page() {

	document.body.style = 'background: white;';

	return (
		<div>
			<img src={error404} className="w-2/5 ml-auto mr-auto" />
			<div className="text-center text-4xl font-face-gm">
				Negativity is high in here
			</div>
		</div>
	);
}

export default Error404Page;