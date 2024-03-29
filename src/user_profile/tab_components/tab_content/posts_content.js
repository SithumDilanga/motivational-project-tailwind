import Post from "../../../home/posts/post"
import img1 from '../../../assets/img1.jpg';
import { MdImage } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';
import axios from "axios";
import Compressor from 'compressorjs';

import PulseLoader from "react-spinners/PulseLoader";

import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../../slices/postNewSlice';

import { fetchPosts, postsSelector } from '../../../slices/postsSlice'


function PostsContent() {

  // to select input element image pick 
  const fileInput = useRef(null)

  // to check whether the post text is sent success or not
  const [isPostCompleted, setIsPostCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

	const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts);

  // ---------- End Auto resizing textarea(vanilla JS implementation) ----------

  // ---------- image select and upload functions & compressing -----------

  const [selectedImages, setSelectedImages] = useState([]); // to pick image
  const [imgData, setImgData] = useState([]); // to preview image
  const [compressedImg, setCompressedImg] = useState(null); // compressed image 

  const imageSelectHandler = event => {
    // converting event files object into a list to pass for compressing and uploading
    setSelectedImages(Object.values(event.target.files));
    console.log(event.target.files);

    /* Get files in array form */
    const files = Array.from(event.target.files);

    console.log(event.target.files[0]);
    console.log(event.target.files[1]);

    Promise.all(files.map(file => {
      return (new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', (ev) => { resolve(ev.target.result) });
        reader.addEventListener('error', reject);
        reader.readAsDataURL(file);
      }));
    }))
    .then(images => {
  
      /* Once all promises are resolved, images will be an array of image URI's */
      console.log(images)
      setImgData(images)
      // console.log(imgData);
    }, err => {        
      console.error(err);
    });

    // const reader = new FileReader();
    // reader.addEventListener("load", () => {
    //   setImgData(reader.result);
    // });
    // reader.readAsDataURL(event.target.files[1]);
    // console.log(imgData);
  }

  const imageUploaderHandler = () => {

    const fd = new FormData();

    selectedImages.map((image) => {
      // compressing the image a send the post request
      console.log(image);
      new Compressor(image, {
      quality: 0.8,
      success: (compressedResult) => {
          console.log(compressedResult);
          setCompressedImg(compressedResult);

          // fd.append('image', selectedImages, selectedImages.name);
          fd.append('image', compressedResult, compressedResult.name);
        }
      });
    });

    axios.post('https://myapi/photos', fd, {
      onUploadProgress: ProgressEvent => {
        console.log('Upload Progress : ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%');
      }
    }).then(res => {
      console.log(res);
    });

  }

  // ---------- End image select and upload functions & compressing -----------


  // ---------- description text select and upload functions -----------

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
    axios.post('https://enigmatic-shore-01544.herokuapp.com/api/v1/posts', desc)
          .then(response => {
            if(response.status === 201) {
              setIsPostCompleted(true);
              setIsLoading(false);
              console.log(response.status);
            }
            // console.log(response.status);
          });
    // setDescTextId(response.status)
    // console.log(descTextId);
  }

  // ---------- description text select and upload functions -----------

  useEffect(() => {
    // dispatch(fetchPosts())
    dispatch(getPosts())
    .unwrap().then((originalPromiseResult) => {
      console.log(originalPromiseResult);
    }).catch((rejectedValueOrSerializedError) => {
      console.log(rejectedValueOrSerializedError);
    });
  }, [dispatch])

	// error handling & map successful query data 
  const renderPosts = () => {
    if (status === 'loading') return (
      <div className="flex justify-center mt-8">
        <PulseLoader size={10} color="#ffa500" />
        {/* Loading... */}
      </div>)
    if (status === 'failed') return <p>Cannot display recipes...</p>

    return posts.map(post => 
      <Post postData={post} isPostOwner={true} />  
    )
  }

	return (
    <div className="bg-gray-50">
		  <div className="m-auto pt-3 sm:w-4/5 ">
        <div className=" bg-white mx-2 my-2 p-2 pt-1 shadow-md rounded-md">
          <div className="sm:flex sm:items-center">
            <div className="inline-flex items-center ml-1">
              <img src={img1} className="h-12 w-12 mr-3 rounded-full object-cover     object-center" />
              {/* <input type="text" placeholder="What motivates you ?"   className="text-lg  focus:outline-none" /> */}
              <textarea className="text-lg mt-7 focus:outline-none resize-none"     placeholder="What motivates you?" value={isPostCompleted ? '' : descText} onChange={handleDescText} >
              </textarea>
            </div>

            {/* image picker */}
            <input type="file" onChange={imageSelectHandler} multiple accept="image/*" className="hidden" ref=  {fileInput} />
            <div className="bg-yellow-100 w-20 flex items-center mr-1 ml-1 px-2 py-1 my-2 rounded-md hover:shadow cursor-pointer sm:hover:shadow-none sm:ml-auto  sm:hover:bg-yellow-100 sm:bg-transparent" onClick={() => fileInput.current?. click()}>
              <MdImage size="24" color="#FFA500" />
              <div className="text-gray-500 font-medium ml-0.5">Photo</div>
            </div>
          </div>

          {/* selectedImages[0] */}
          {/* previewing selected images */}
          <div className="">
            {imgData.map((image) => 
              <img src={image} className={`w-full ${isPostCompleted ? "hidden" : ""}`} />
            )}
          </div>

        </div>
        <div className="flex items-center justify-end w-full pr-2 pt-1">
        <div className="pr-2">
          <PulseLoader loading={isLoading} size={10} color="#ffa500" />
        </div>
          <button className="bg-brand-primary text-white text-lg font-semibold px-12 py-2 rounded-full hover:bg-brand-secondary outline-none" onClick={() => {
            descTextUploadHandler();
            imageUploaderHandler();
            setIsLoading(true);
          }} >
            Grit
          </button>
          
          {/* <button onClick={() => fileInput.current?.click()} >Pick File</button> */}
          {/* <button onClick={imageUploaderHandler}>Upload</button> */}
        </div>
        <div className={`bg-gray-100 flex items-center justify-center gap-2 mt-2 py-2 w-full rounded-md ${isPostCompleted ? "block" : "hidden"}`}>
          <MdCheckCircle size="22" color="#ffa500" />
          <div className="text-lg">
            Grit Completed!
          </div>
        </div>
		  	{renderPosts()}
		  </div>
    </div>
	);
}

export default PostsContent;