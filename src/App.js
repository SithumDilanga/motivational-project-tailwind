// "build": "vite build", inside package.json

import logo from './logo.svg';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.png';
import tailwindLogo from './assets/tailwindLogo.png';
import { RiShareForwardLine } from 'react-icons/ri'
import { FaShareSquare } from 'react-icons/fa';
import { IoArrowRedoOutline } from 'react-icons/io5';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './App.css';

const postData = [
  {
    username: 'Steve Hawl',
    date: '28 jun 2020',
    userProfilePic: {img1},
    postDesc: 'This is post description',
    postImages: [
      'https://live.staticflickr.com/65535/51289414298_52b007f540_h.jpg', 
      'https://live.staticflickr.com/65535/51294202574_2bfe8c0cdb_h.jpg'
    ],
    postReactions: {
        good: '15',
        awesome: '7',
        excellent: '5',
        bad: '1'
      }
    ,
  },
  {
    username: 'Jack Mori',
    date: '25 jun 2020',
    userProfilePic: {img2},
    postDesc: 'This is post description of Jack',
    postImages: [
      'https://live.staticflickr.com/65535/51294202574_2bfe8c0cdb_h.jpg', 
    ],
    postReactions: {
        good: '15',
        awesome: '7',
        excellent: '5',
        bad: '1'
      }
    ,
  },
  {
    username: 'Jane Oni',
    date: '24 jun 2020',
    userProfilePic: {img2},
    postDesc: 'This is post description of Jane',
    postImages: [
      "https://live.staticflickr.com/65535/51295760866_c10e777459_h.jpg", 
    ],
    postReactions: {
        good: '25',
        awesome: '15',
        excellent: '9',
        bad: '5'
      }
    ,
  },
  {
    username: 'Niko Belic',
    date: '20 jun 2020',
    userProfilePic: {img2},
    postDesc: 'This is post description of Niko Belic',
    postImages: [
      "https://live.staticflickr.com/65535/51300730820_9c3eb95cac_k.jpg", 
    ],
    postReactions: {
        good: '35',
        awesome: '15',
        excellent: '14',
        bad: '1'
      }
    ,
  },
];


function NavBar() {
  return (
    <div className="flex gap-1 justify-between m-4">
      <img src={tailwindLogo} className="w-12 h-6" />
      <div className="flex gap-2 items-center">
        <div className="text-base font-medium">Dear John</div>
        <img src={img1} className="w-12 h-12 rounded-full object-cover object-center" />
      </div>
    </div>
  );
}

function ReactionButton({reactionText}) {
  return (
    <button className="rounded-full py-2 px-3">
      {reactionText}
    </button>
  );
}

function Post({postData}) {
  return (
    <div>
      <div className=" bg-white my-3 mx-1 rounded-lg sm:rounded-2xl shadow-lg">
        <div className="grid grid-flow-row">
          <div className="flex items-center ml-3 mt-3 sm:ml-6 sm:mt-6 mb-3">
            <img src={img1} className="w-12 h-12 rounded-full object-cover object-cente"/>
            <div className="flex-col mt-1 ml-4">
              <div className="text-base font-bold">
                {postData.username}
              </div>
              <div className="text-sm text-gray-500">
                {postData.date}
              </div>
            </div>
            <div className = "ml-auto mr-6">
              <IoArrowRedoOutline size = {25} onClick = {() => {}}/>
            </div>
          </div>
          <div className="mt-0 ml-3 font-normal text-base">
            {postData.postDesc}
          </div>
          <div className="mt-2">
            {/* <img src = {img1} className="" /> */}
            <AwesomeSlider bullets = {false}> 
              <div className = "postImage" data-src={postData.postImages[0]} />
                  <div className = "postImage" data-src={postData.postImages[1]} />
            </AwesomeSlider>
            
          </div>
          <div className="ml-4 mt-3 mb-4">
            <ReactionSection postReactionsData={postData.postReactions}/>
          </div>
        </div>
          </div>
        </div>
  );
}

function ReactionSection({postReactionsData}) {
  return (
    <div className="grid-flow-row text-xs">
      {/* <ReactionButton reactionText="15 Good" />
      <ReactionButton reactionText="7 Awesome"/>
      <ReactionButton reactionText="5 Excellent"/>
      <ReactionButton reactionText="1 Bad"/> */}
      <button className="bg-yellow-500 rounded-full py-2 px-3 mr-2 mt-1">
      {postReactionsData['good']} Good
      </button>
      <button className="bg-yellow-400 rounded-full py-2 px-3 mr-2 mt-1">
      {postReactionsData['awesome']} Awesome
      </button>
      <button className="bg-yellow-300 rounded-full py-2 px-3 mr-2 mt-1">
      {postReactionsData['excellent']} Excellent
      </button>
      <button className="bg-yellow-200 rounded-full py-2 px-3 mr-2 mt-1">
      {postReactionsData['bad']} Bad
      </button>
    </div>
  );
}

function App() {
  
  return (
    <div>
      <NavBar />
      <div className="grid gap-1 h-full grid-cols-1 sm:grid-cols-4">
        <div className="bg-yellow-500 col-span-1 order-2 h-64 m-2 rounded-xl sm:order-1">
          <div className="text-white text-lg font-bold m-4">
            First Column
          </div>
        </div>
        <div className="col-span-2 order-1">
          <Post postData={postData[0]}/>
          <Post postData={postData[1]}/>
          <Post postData={postData[2]}/>
          <Post postData={postData[3]}/>
        </div>
        <div className="order-3 sm:order-1">
          <div className="grid-flow-col m-2">
            <div className="bg-yellow-500 w-auto h-44 mb-2 rounded-xl">
              <div className="flex-col content-center p-4 h-ful">
               <div className="font-medium mb-2 text-white">
                 Daily Quote
                </div>
               <div className="font-bold text-xl text-white">
                 Stay Strong at life storms
                </div>
              </div>
            </div>
            <div className="bg-yellow-500 w-auto h-32 rounded-xl content-center align-middle">
            </div>
          </div>
          
        </div>   
        {/* <div className="bg-blue-900">Col 4</div>     */}
      </div>
    </div>

    // <div className="bg-gray-100 m-2 rounded-lg shadow-lg">
    //   <div className="grid lg:grid-cols-2">
    //   <div className="px-8 py-16 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full">
    //     {/* <img className = "h-40" src = {img2} alt = "svgimage" /> */}
    //     <img className="h-auto w-auto mt-4 rounded-xl shadow-xl sm:h-64 sm:w-full sm:object-cover object-center lg:hidden" src = {img1} alt = "svgimage" />
    //     <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl">
    //     You can work from anywhere.
    //     <br className="hidden lg:inline"></br>
    //     <span className="text-brand "> Take advantage of it</span> 
    //     </h1>
    //     <p className="mt-4 text-gray-600 sm:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    //       Morbi gravida pulvinar lorem imperdiet hendrerit. 
    //       Morbi tristique nisl eget ante posuere vulputate. 
    //       In scelerisque consectetur turpis.
    //     </p>
    //     <div className="mt-4">
    //       <a className="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition mr-2" href = "#" >Click Here</a>
    //       <a className="btn btn-secondary" href = "#" >Learn More</a>
    //     </div>
    //   </div>
    //   <div className="hidden relative lg:block">
    //     <img className="absolute w-full h-full inset-0 object-cover object-center rounded-r-lg" src = {img1} alt = "svgimage" />
    //   </div>
    //   </div>
    // </div>
  );
}

export default App;
