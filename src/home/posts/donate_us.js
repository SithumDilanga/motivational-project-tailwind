import React, { useEffect, useRef, useState }  from 'react'
import axios from 'axios';

function DonateUs() {

	const [descText, setDescText] = useState();
  // const [descTextId, setDescTextId] = useState();

  const handleDescText = (event) => {
    setDescText(event.target.value);
    console.log(descText);
  }

	const descTextUploadHandler =() => {
    const desc = {
      desc: {descText}
    }

    //desc
    axios.post('https://enigmatic-shore-01544.herokuapp.com/api/v1/posts', {
			username: 'Jane Onii',
      date: '24 jun 2020',
      userProfilePic: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      postDesc: 'This is post description of Jane',
      postImages: [
        "https://live.staticflickr.com/65535/51304260849_d30f211689_h.jpg",
        "https://live.staticflickr.com/65535/51295760866_c10e777459_h.jpg", 
      ],
      postReactions: {
          good: '25',
          awesome: '15',
          excellent: '9',
          bad: '5'
        }
		})
          .then(response => {
            if(response.status === 201) {
              // setIsPostCompleted(true);
              // setIsLoading(false);
              console.log(response.status);
							console.log(response);
            }
            // console.log(response.status);
          });
    // setDescTextId(response.status)
    // console.log(descTextId);
  }

	const deleteHandler =() => {
    const desc = {
      desc: {descText}
    }

    //desc
    axios.delete('https://enigmatic-shore-01544.herokuapp.com/api/v1/posts/610fa588f0ab3200154a1543',)
          .then(response => {
            if(response.status === 201) {
              // setIsPostCompleted(true);
              // setIsLoading(false);
              console.log(response.status);
							console.log(response);
            } 
						console.log(response.status);
            // console.log(response.status);
          });
  }

	const updateHandler =() => {
    const desc = {
      desc: {descText}
    }

    //desc
    axios.patch('https://enigmatic-shore-01544.herokuapp.com/api/v1/posts/610e4185273a5b00157cbd8c',{
			username: `${descText}`
		})
          .then(response => {
            if(response.status === 201) {
              // setIsPostCompleted(true);
              // setIsLoading(false);
              console.log(response.status);
							console.log(response);
            } 
						console.log(response.status);
            // console.log(response.status);
          });
  }

	return (
		<div>
			<textarea className="text-lg mt-7 focus:outline-none resize-none"     placeholder="What motivates you?" onChange={handleDescText} >
      </textarea>

			<button className="bg-brand-primary text-white text-lg font-semibold px-12 py-2 rounded-full hover:bg-brand-secondary outline-none" onClick={() => {
        descTextUploadHandler();
        // imageUploaderHandler();
        // setIsLoading(true);
      }} >
        Grit
      </button>
			<button className="bg-brand-primary text-white text-lg font-semibold px-12 py-2 rounded-full hover:bg-brand-secondary outline-none" onClick={() => {
        deleteHandler();
        // imageUploaderHandler();
        // setIsLoading(true);
      }} >
        Delete
      </button>
			<button className="bg-brand-primary text-white text-lg font-semibold px-12 py-2 rounded-full hover:bg-brand-secondary outline-none" onClick={() => {
        updateHandler();
        // imageUploaderHandler();
        // setIsLoading(true);
      }} >
        Update
      </button>
		</div>
		
	);
}

export default DonateUs;