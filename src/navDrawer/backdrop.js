import React from 'react';

function Backdrop({backdropClick}) {
	return (
		<div className="bg-backdrop fixed w-full h-full z-10 top-0 left-0" onClick={backdropClick}>

		</div>
	);
}

export default Backdrop;