import React, { useState } from 'react'
// import SearchBar from '../Components/SearchBar';
import { Filter, Search } from 'lucide-react'
import { Link } from 'react-router-dom';


const SundaySeries = ({sermons}) => {

  const [search, setSearch] = useState('')
  // console.log(search.length);

  const sundayTeachings = sermons
  .filter((sermon) => sermon.serviceDay === 'Sunday')
  .sort((a, b) => new Date(b.date) - new Date(a.date));  

  const sundayTeachingsElements = sundayTeachings.map((sermon, index) => {
    return(
      <Link to={`/sermon/${sermon.title.toLowerCase()}`} key={sermon.id} className='p-4 h-[450px] w-[300px] flex flex-col rounded-lg justify-between shadow hover:shadow-2xl transition-shadow duration-300'>
      <img src={sermon.thumbnail ? sermon.thumbnail : null}  alt="" />
      <div className='flex flex-col justify-center '>
      <p className='font-bold '>{sermon.title}</p>
      <p className='text-[13px]'>{sermon.minister}</p>
      </div>
      </Link>
    )
  })

  const searchElements = sundayTeachings.filter((sermon) => {
  const searchTerm = search.toLowerCase().trim();
  if (searchTerm === '') return true;
  return sermon.title.toLowerCase().trim().includes(searchTerm);
}).map((sermon, index) => {
    return(
      <Link to={`/sermon/${sermon.title.toLowerCase()}`} className='flex my-2 gap-2 px-5 hover:bg-[#2d2c4e] cursor-pointer items-center'>
        <img src={sermon.thumbnail ? sermon.thumbnail : null} className='w-7.5' alt="" />
        <div className='text-[13px] py-2'>
        <p>{sermon.title}</p>
        <p>by {sermon.minister}</p>
        </div>
      </Link>
    )
  })

  // console.log(search.length);

  const [suggestion, setSuggestion] = useState(true)
  console.log(suggestion);

  
  return (
    <div>
    <div className=''>
        <div className="flex relative justify-center items-center mt-[50px] mb-[10px]">
        {/* <div className="bg-[#05042E] text-white h-[35px] w-[35px] p-2.5 rounded-full mr-3 flex justify-center items-center transition-all duration-300"> 
        <Filter className='text-white hover:text-[#ff1d0d] '/>
        </div> */}
        
        <input
        onFocus={() => setSuggestion(true)}
        className='focus:outline-none bg-[#05042E] text-white px-4 rounded-3xl w-[80%] max-w-[500px] h-[40px] shadow'
        type="text"
        maxLength={25}
        onChange={(e) => {
          setSearch(e.target.value)
          setSuggestion(true)
        }}
        placeholder='Search our teachings...'
        />

    
        <div className="bg-[#05042E] text-white h-[35px] w-[35px] p-2.5 rounded-full mb-0.5 ml-[-38px] flex justify-center items-center transition-all duration-300"> 
        <Search className='text-white hover:text-[#ff1d0d]'/>
        </div>
        {
          search && <div onClick={() => setSuggestion(true)} className={`rounded-[15px]  py-3 ${suggestion ? "block" : "hidden"} bg-[#05042E] w-[90%] max-h-[400px] overflow-y-auto max-w-xl top-12  absolute`}>
          {searchElements.length > 0 ? searchElements : 
          <p className='text-center text-[13px]'>Sorry, we couldn't find your search :(</p>}
        </div>
        }
        </div>
      </div>


      <div onClick={() => setSuggestion(false)} className='flex flex-wrap items-center justify-center gap-4 p-4'>
        {sundayTeachingsElements}
    </div>
    </div>
  )
}

export default SundaySeries