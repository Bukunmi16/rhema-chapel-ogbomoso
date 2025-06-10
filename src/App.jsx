import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import OurValues from './Pages/OurValues';
import OurServices from './Pages/OurServices';
import Departments from './Pages/Departments';
import History from './Pages/History';
import Teachings from './Pages/Teachings';
import Navbar from './Components/Navbar';
import HomeBackground from './Components/HomeBackgroundImages';
import SideBar from './Components/SideBar';
import SundaySeries from './Pages/SundaySeries';
import WednesdaySeries from './Pages/WednesdaySeries';
import SermonInfo from './Pages/SermonInfo';
import sermonsData from './sermonsData.json'
import MonthlyTeaching from './Pages/MonthlyTeaching';
import './index.css'
import WednesdayTeachingInfo from './Pages/WednesdayTeachingInfo';
import Ministers from './Pages/Ministers';
import MinisterBiography from './Pages/MinisterBiography';
import { ministersData } from './data';
import MinistersTeaching from './Pages/MinistersTeaching';
import JoinUs from './Pages/JoinUs';

const one = '/HomeBackgroundImages/one.jpg'
const two = '/HomeBackgroundImages/two.jpg'
const three = '/HomeBackgroundImages/three.jpg'
// const four ='/HomeBackgroundImages/four.jpg'
const five = '/HomeBackgroundImages/five.jpg'
const six = '/HomeBackgroundImages/six.jpg'
const seven = '/HomeBackgroundImages/seven.jpg'
const eight = '/HomeBackgroundImages/eight.jpg'
const nine = '/HomeBackgroundImages/nine.jpg'
const ten = '/HomeBackgroundImages/ten.jpg'

const AppContent = ({ setCurrentPage, sideBarOpen, setSideBarOpen, images, currentImageIndex, currentPage, home, setHome, sermons }) => {
  const location = useLocation(); // Now inside a child of <BrowserRouter>

  useEffect(() => {
    const routeName = location.pathname.replace('/', '') || 'Home';
    setCurrentPage(routeName);
  }, [location, setCurrentPage]);

  
  if (currentPage === 'Home') {
    setHome(true)
    // console.log(home);
  } else {
    setHome(false)
    // console.log(home);
  }
  

  return (
    <div className={`relative ${currentPage === 'Home' && 'h-[100vh]'}  max-w-[1440px] bg-no-repeat bg-cover bg-center bg-[linear-gradient(to_bottom_right,#05042E,darkblue)] ${currentPage === 'join-us' && 'bg-[linear-gradient(to_bottom_right,#05042E,#ff1d0d)]'} text-white`}>
      {currentPage === 'Home' && <HomeBackground home={home} />}
      <div className="relative z-10">
        <Navbar 
        setSideBarOpen={setSideBarOpen}
        currentPage = {currentPage}
        />
        <Routes>
          <Route path="/" element={<Homepage setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} />} />
          <Route path="/join-us" element={<JoinUs/>} />
          <Route path="/services" element={<OurServices setCurrentPage={setCurrentPage} />} />
          <Route path="/ourvalues" element={<OurValues setCurrentPage={setCurrentPage} />} />
          <Route path="/departments" element={<Departments setCurrentPage={setCurrentPage} />} />
          {/* <Route path="/history" element={<History setCurrentPage={setCurrentPage} />} /> */}
          <Route path="/ministers" element={<Ministers setCurrentPage={setCurrentPage} />} />
          <Route path="/ministers/:ministerName" element={<MinisterBiography ministerData={ministersData} />} />
          <Route path="/ministers/:ministerName/teachings" element={<MinistersTeaching sermons={sermons}/>} />
          <Route path="/teachings" element={<Teachings setCurrentPage={setCurrentPage} sermons={sermons} />} />
          <Route path="/sunday-series" element={<SundaySeries sermons={sermons} />} />
          <Route path="/wednesday-series" element={<WednesdaySeries sermons={sermons} />} />
          <Route path="/sermon/:sermonName" element={<SermonInfo sermons={sermons} />} />
          <Route path="/wednesday-series/:month" element={<MonthlyTeaching sermons={sermons} />} />
          <Route path="/wednesday-series/:month/:teachingName" element={<WednesdayTeachingInfo sermons={sermons} />} />
        </Routes>
        <div
          className={`absolute ${!sideBarOpen && 'hidden'} w-[100%] z-50 sm:w-[50%] top-0 right-0`}
        >
          <SideBar setSideBarOpen={setSideBarOpen} isOpen={sideBarOpen} />
        </div>
      </div>
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState('');
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [sermons, setSermons] = useState(sermonsData)
  const [home, setHome] = useState(false)
  

  // console.log(currentPage);
  

  const images = [
    one,
    two,
    three,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  return (
    <Router>
      <AppContent
        sermons={sermons}
        home={home}
        setHome={setHome}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
        images={images}
        currentImageIndex={currentImageIndex}
      />
    </Router>
  );
}

export default App;
