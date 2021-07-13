// "build": "vite build", inside package.json

import img1 from './assets/img1.jpg';
import tailwindLogo from './assets/tailwindLogo.png';
import DailyMotivation from './daily_motivation.js';
import postData from './fakeApiData';
import Post from './home/post';
import { FaBolt } from 'react-icons/fa'
import { FaCrosshairs } from 'react-icons/fa';
import 'react-awesome-slider/dist/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';




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



function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/daily-motivation" component={DailyMotivation}/>
        <div>
        <NavBar />

        {/* ----------- first view on mobile screens ---------*/}

        <div className="flex mx-4 my-1 sm:hidden">
          <Link to="/daily-motivation">
            <div className="bg-yellow-400 w-auto p-3 rounded-full">
              <div className="flex justify-center px-2">
                <FaCrosshairs size="25" color="white"/>
                <div className="text-white pl-2 font-medium">
                  First
                </div>
              </div>
            </div>
          </Link>
          <div className="bg-yellow-400 w-auto ml-2 p-3 rounded-full">
            <div className="flex justify-center px-2">
              <FaBolt size="25" color="white"/>
              <div className="text-white pl-2 font-medium">Second</div>
            </div>
          </div>
        </div>

        {/* ----------- End first view on mobile screens ---------*/}

        <div className="grid gap-1 h-full grid-cols-1 sm:grid-cols-4">
          <div className="bg-yellow-500 col-span-1 order-2 h-64 m-2 rounded-xl hidden sm:order-1 sm:block">
            <div className="text-white text-lg font-bold m-4">
              First Column
            </div>
          </div>
          <div className="col-span-2 order-1">

            {/* first view on mobile screens */}

            <div className="bg-yellow-500 w-auto h-44 m-2 rounded-xl shadow-lg sm:hidden">
              <div className="flex-col p-4 h-full w-full">
              <div className="font-medium mb-2 text-white">
                Daily Quote
                </div>
              <div className="font-bold text-xl text-white">
                Stay Strong at life storms
                </div>
              </div>
            </div>

            {/* posts */}
            <Post postData={postData[0]}/>
            <Post postData={postData[1]}/>
            <Post postData={postData[2]}/>
            <Post postData={postData[3]}/>
          </div>
          <div className="hidden sm:block sm:order-1">
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
              <div className="bg-yellow-400 w-auto h-32 rounded-xl content-center align-middle">
              </div>
            </div>
            
          </div>   
          {/* <div className="bg-blue-900">Col 4</div>     */}
        </div>
      </div>
      </Switch>
    </Router>
    

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
