import Post from "../../../home/posts/post"

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchPosts, postsSelector } from '../../../slices/postsSlice'


function PostsContent() {
	const dispatch = useDispatch()
  const { posts, loading, hasErrors } = useSelector(postsSelector)

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
		  	{renderPosts()}
		  </div>
    </div>
	);
}

export default PostsContent;