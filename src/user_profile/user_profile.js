import img1 from '../assets/img1.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import Tabs from "./tab_components/tabs"; 
import TabContent from './tab_components/tab_content';
import { useState } from "react";
import { MdPhotoCamera } from 'react-icons/md';

import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import 'antd/dist/antd.css';

function UserProfile() {

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
			<div className=" relative bg-white m-2 rounded-lg">
				<div className="flex-col">
					<div className="relative">
						<img src={img4} className="h-48 w-max rounded-t-lg object-cover object-center sm:h-64" />
						<div className="flex gap-1 items-center absolute hover:bg-backdrop z-10 mt-1 mr-1 p-1 right-0 top-0 text-white rounded-md cursor-pointer">
							<MdPhotoCamera size="20" />
							<div>
								Edit cover
							</div>
						</div>
						<div className="pl-6">
							<img src={imgUrl.url} className="absolute top-2/3 w-28 h-28 rounded-full border-4 border-white object-cover object-center sm:w-32 sm:h-32"/>
						</div>
						<div className="flex gap-1 items-center absolute hover:bg-gray-200 text-xs p-1 ml-40 mt-1 rounded-md cursor-pointer sm:text-sm">
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