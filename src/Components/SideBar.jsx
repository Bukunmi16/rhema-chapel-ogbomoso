import Cards from './Cards';
import AboutCards from './Cards';
import {aboutSideBarData} from '../data';
import React from 'react';

const SideBar = ({ setSideBarOpen, isOpen }) => {
  const cardElements = aboutSideBarData.map((data, index) => {
    return (
      <AboutCards
        key={index}
        title={data.title}
        image={data.image}
        link={data.link}
        description={data.description}
        setSideBarOpen={setSideBarOpen}
      />
    );
  });

  return (
    <aside
      className={`fixed top-0 right-0 h-[100vh] w-[100%] sm:w-[50%] sm:min-w-[500px]   p-5 overflow-y-auto flex flex-col items-center gap-4  transform transition-transform duration-500 bg-transparent ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
    >

      <span
        className="material-icons-round text-[#fcfcfc] w-full cursor-pointer"
        onClick={() => setSideBarOpen(false)}
      >close</span>
      <div className="grid grid-cols-3 border-white w-full gap-5 h-full">{cardElements}</div>
    </aside>
  );
};

export default SideBar;