import img1 from '../assets/img1.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import Tabs from "./tab_components/tabs"; 
import TabContent from './tab_components/tab_content';
import { useState, useRef } from "react";
import { MdPhotoCamera, MdEdit } from 'react-icons/md';
import axios from "axios";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../slices/userProfileSlice';

import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import 'antd/dist/antd.css';

function UserProfile() {

	// to select input element image pick 
  const profilePicFile = useRef(null)
	const coverPicFile = useRef(null)


	const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);

	useEffect(() => {
    // dispatch(fetchPosts())
    dispatch(getUsers())
    .unwrap().then((originalPromiseResult) => {
      console.log(originalPromiseResult);
    }).catch((rejectedValueOrSerializedError) => {
      console.log(rejectedValueOrSerializedError);
    });
  }, [dispatch])


	// error handling & map successful query data 
  const renderNames = () => {
    if (status === 'loading') return <p>Loading recipes...</p>
    if (status === 'failed') return <p>Cannot display recipes...</p>

    return users.map(user => 
			user.name === 'Leanne Graham' ? <h1>{user.name}</h1> : null	
		);

    /*return posts.map((post, i) => 
      <h1 key={i}>{post.name}</h1>
    )*/
  }


	  // ---------- profile image select and upload functions -----------

		const [selectedProfileImage, setSelectedProfileImage] = useState(''); // to pick image
		const [imgData, setImgData] = useState(null); // to preview image
	
		const imageSelectHandler = event => {
			setSelectedProfileImage(event.target.files[0]);
			console.log(event.target.files[0]);
	
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				setImgData(reader.result);
			});
			reader.readAsDataURL(event.target.files[0]);

		}
	
		const imageUploaderHandler = () => {
			const fd = new FormData();
			fd.append('image', selectedProfileImage, selectedProfileImage.name);
			axios.post('https://myapi/photos', fd, {
				onUploadProgress: ProgressEvent => {
					console.log('Upload Progress : ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%');
				}
			}).then(res => {
				console.log(res);
			});
		}
	
		// ---------- End profile image select and upload functions -----------

		// ---------- profile image select and upload functions -----------

		// to pick image
		const [selectedCoverImage, setSelectedCoverImage] = useState(''); 
		const [CoverImgData, setCoverImgData] = useState(null); // to preview image
	
		const CoverImageSelectHandler = event => {
			setSelectedCoverImage(event.target.files[0]);
			console.log(event.target.files[0]);
	
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				setCoverImgData(reader.result);
			});
			reader.readAsDataURL(event.target.files[0]);

		}
	
		const CoverImageUploaderHandler = () => {
			const fd = new FormData();
			fd.append('image', selectedCoverImage, selectedCoverImage.name);
			axios.post('https://myapi/photos', fd, {
				onUploadProgress: ProgressEvent => {
					console.log('Upload Progress : ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%');
				}
			}).then(res => {
				console.log(res);
			});
		}
	
		// ---------- End profile image select and upload functions -----------

	const [imgUrl, setImgUrl] = useState({
		url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
	});

	const onChange = ({ imgUrl: newImgUrl }) => {
    console.log(newImgUrl);
    setImgUrl(newImgUrl);
  };

	const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);

    if (imgWindow) {
      imgWindow.document.write(image.outerHTML);
    } else {
      window.location.href = src;
    }
  };

	return (
		<div className="m-auto sm:w-8/12">
			{/* <div>{renderNames()}</div> */}
			<div className=" relative bg-white m-2 rounded-lg">
				<div className="flex-col">
					<div className="relative">
						{/* src={CoverImgData} onLoad={CoverImageUploaderHandler} */}
						<img src={img4} className="h-48 w-max rounded-t-lg object-cover object-center sm:h-64"  />
						<input type="file" onChange={CoverImageSelectHandler} className="hidden" ref=  {coverPicFile} />
						<div className="flex gap-1 items-center absolute hover:bg-backdrop z-10 mt-1 mr-1 p-1 right-0 top-0 text-white rounded-md cursor-pointer">
							<MdPhotoCamera size="20" onClick={() => coverPicFile.current?. click()} />
							<div>
								Edit cover
							</div>
						</div>
						<div className="pl-6">
							{/* imgData  onLoad={imageUploaderHandler}*/}
							<img src={img3} className="absolute top-2/3 w-28 h-28 rounded-full border-4 border-white object-cover object-center sm:w-32 sm:h-32" />
						</div>
						<input type="file" onChange={imageSelectHandler} className="hidden" ref=  {profilePicFile} />
						<div className="flex gap-1 items-center absolute hover:bg-gray-200 text-xs p-1 ml-40 mt-1 rounded-md cursor-pointer sm:text-sm" onClick={() =>{
							profilePicFile.current?. click()
							// if(isImagePicked) {
							// 	imageUploaderHandler();
							// }
						}}>
							<MdPhotoCamera size="20" />
							<div>
								Edit profile picture
							</div>
						</div>
						{/* <div className="ml-44">
						<ImgCrop grid>
								<Upload 
									// action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
									listType="picture-card"
        					// fileList={fileList}
        					// onChange={onChange}
        					onPreview={onPreview}
									>
										{'+ Upload'}
									
								</Upload>
							</ImgCrop>
						</div> */}
					</div>
					<div>  {/* name and tag*/}
						<div className="mt-12 ml-10 text-xl font-bold">
							{/* Jane Jone */}
							{renderNames()}
						</div>
						<div className="ml-9 text-sm">
							@jane_jone
						</div>
					</div>
					<div className="ml-9 mt-4 mr-2 text-sm sm:text-base">
						Passionte learning new technologies. <section className="inline text-yellow-500 font-medium">#Motivation</section> comes from the heart and never give up. If you fail stand up and try again. <section className="inline text-yellow-500 font-medium">#NeverGiveUp</section> <sectio className="inline-block ml-1 px-1 cursor-pointer rounded-sm hover:bg-yellow-100" ><MdEdit /></sectio>
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