import Post from "../../../home/posts/post"
import img1 from '../../../assets/img1.jpg';
import { MdImage } from 'react-icons/md';

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPosts, postsSelector } from '../../../slices/postsSlice'


function PostsContent() {

  // ---------- Auto resizing textarea(vanilla JS implementation) ----------

  const txtArea = document.getElementsByTagName("textarea");

  for (let i = 0; i < txtArea.length; i++) {
    txtArea[i].setAttribute("style", "height:" + (txtArea[i].scrollHeight) + "px;overflow-y:hidden; ");
    txtArea[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
  }

	const dispatch = useDispatch()
  const { posts, loading, hasErrors } = useSelector(postsSelector)

  // ---------- End Auto resizing textarea(vanilla JS implementation) ----------

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

	// error handling & map successful query data 
  const renderPosts = () => {
    if (loading) return <p>Loading recipes...</p>
    if (hasErrors) return <p>Cannot display recipes...</p>

    return posts.map(post => 
      <Post postData={post} />  
    )
  }

	return (
    <div className="bg-gray-50">
		  <div className="m-auto pt-3 sm:w-4/5 ">
        <div className="sm:flex sm:items-center bg-white mx-2 my-2 p-2 pt-1 shadow-md rounded-md">
          <div className="inline-flex items-center ml-1">
            <img src={img1} className="h-12 w-12 mr-3 rounded-full object-cover   object-center" />
            {/* <input type="text" placeholder="What motivates you ?" className="text-lg  focus:outline-none" /> */}
            <textarea className="text-lg mt-7 focus:outline-none resize-none"   placeholder="What motivates you?" >
            </textarea>
          </div>
          <div className="bg-yellow-100 w-20 flex items-center mr-1 ml-1 px-2 py-1 my-2 rounded-md hover:shadow cursor-pointer sm:hover:shadow-none sm:ml-auto sm:hover:bg-yellow-100 sm:bg-transparent">
            <MdImage size="24" color="#FFA500" />
            <div className="text-gray-500 font-medium ml-0.5">Photo</div>
          </div>
        </div>
        <div className="flex justify-end w-full pr-2 pt-1">
          <button className="bg-brand-primary text-white text-lg font-semibold px-12 py-2 rounded-full hover:bg-brand-secondary outline-none">
          Grit
        </button>
        </div>
		  	{renderPosts()}
		  </div>
    </div>
	);
}

export default PostsContent;