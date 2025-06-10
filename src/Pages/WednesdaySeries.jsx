import React, {useState} from 'react'
import SearchBar from '../Components/searchBar'
import { Filter, Search } from 'lucide-react'
import { Link } from 'react-router-dom'


const WednesdaySeries = ({sermons}) => {

  const [search, setSearch] = useState('')
  const [suggestion, setSuggestion] = useState(true)



  const wednesdayTeachings = sermons
  .filter((sermon) => sermon.serviceDay === 'Wednesday')
  .sort((a, b) => new Date(b.date) - new Date(a.date));  
  
  const monthlyTeachings = [
      {
        month: 'February',
        teachings: wednesdayTeachings.filter((sermon) => sermon.month.toLowerCase() === 'february')
      },
      {
        month: 'March',
        teachings: wednesdayTeachings.filter((sermon) => sermon.month.toLowerCase() === 'march')
      },
      {
        month: 'April',
        teachings: wednesdayTeachings.filter((sermon) => sermon.month.toLowerCase() === 'april')
      },
      {
        month: 'June',
        teachings: wednesdayTeachings.filter((sermon) => sermon.month.toLowerCase() === 'june')
      },
      {
        month: 'July',
        teachings: wednesdayTeachings.filter((sermon) => sermon.month.toLowerCase() === 'july')
      },
      {
        month: 'August',
        teachings: wednesdayTeachings.filter((sermon) => sermon.month.toLowerCase() === 'august')
      },
      {
        month: 'September',
        teachings: wednesdayTeachings.filter((sermon) => sermon.month.toLowerCase() === 'september')
      },
      {
        month: 'October',
        teachings: wednesdayTeachings.filter((sermon) => sermon.month.toLowerCase() === 'october')
      },
      {
        month: 'November',
        teachings: wednesdayTeachings.filter((sermon) => sermon.month.toLowerCase() === 'november')
      },
      {
        month: 'December',
        teachings: wednesdayTeachings.filter((sermon) => sermon.month.toLowerCase() === 'december')
      },

  ] 

  

    const searchElements = wednesdayTeachings.filter((sermon) => {
        const searchedItems = search.toLowerCase() === '' ? sermon : sermon.month.toLowerCase().trim(" ").includes(search)
        return searchedItems
      }).map((sermon, index) => {
      return(
        <Link 
        to={`/wednesday-series/${sermon.month}/${sermon.title.toLowerCase()}`}
         className='flex my-2 gap-2 px-5 hover:bg-[#c4170ba8] cursor-pointer items-center'>
          <img src={sermon.thumbnail ? sermon.thumbnail : null} className='w-7.5 py-1'  alt="" />
          <div className='text-[13px] py-2  flex justify-between  w-full'>
            <div>
          <p>{sermon.title}</p>
          {/* <p>by {sermon.minister}</p> */}
            </div>
            <div className='text-[10px]'>
              <p>{sermon.month}, {sermon.year}</p>
            </div>
          </div>
        </Link>
      )
    })
  
    // console.log(search.length);
  



  return (
    <div>
        <div className=''>
                <div className="flex relative justify-center items-center mt-[50px] mb-[10px]">

                <input
                onFocus={() => setSuggestion(true)}
                className='focus:outline-none bg-[#c4170b] text-white px-4 rounded-3xl w-[80%] max-w-[500px] h-[40px] shadow'
                type="text"
                maxLength={25}
                onChange={(e) => {
                  setSearch(e.target.value.toLowerCase())
                  setSuggestion(true)
                }}
                placeholder='e.g February'
                />
        
            
                <div className="bg-[#c4170b] text-white h-[35px] w-[35px] p-2.5 rounded-full mb-0.5 ml-[-38px] flex justify-center items-center transition-all duration-300"> 
                <Search className='text-white hover:text-[#ff1d0d]'/>
                </div>
                {
                  search && <div onClick={() => setSuggestion(true)} className={`rounded-[15px]  py-3 ${suggestion ? "block" : "hidden"} bg-[#c4170b] w-[400px] max-h-[400px] overflow-y-auto max-w-xl top-12  absolute`}>
                  {searchElements.length > 0 ? searchElements : 
                  <p className='text-center text-[13px]'>Sorry, we couldn't find your search :(</p>}
                </div>
                }
                </div>
              </div>


    <div onClick={() => setSuggestion(false)} className='flex flex-col items-center justify-center gap-4 p-4'>
        {/* {wednesdayTeachingsElements} */}
        {monthlyTeachings.map((month, index) => ( 
          month.teachings.length > 0 &&
          <div key={index} className='w-full  p-4'>
            <Link to={`/wednesday-series/${month.month.toLowerCase()}`} className='text-2xl   font-bold border-[#ff1d0d] hover:border-[white] transition-all duration-300 border-b mb-1'>{month.month}</Link>
            <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4'>
              {month.teachings.map((sermon) => (
                <Link
                to={`/wednesday-series/${sermon.month}/${sermon.title.toLowerCase()}`}
                key={sermon.id} className='p-4 h-[450px] w-[300px] flex flex-col rounded-lg justify-around shadow hover:shadow-2xl transition-shadow duration-300'>
                  <img src={sermon.thumbnail} alt="" />
                  <div className='flex flex-col flex-wrap justify-center '>
                    <p className='font-bold '>{sermon.title}</p>
                    <p className='text-[13px]'>{sermon.minister}</p>
                    <p className='text-[10px] font-bold'>{sermon.year} {sermon.month} Teaching</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
     </div>


    </div>

)
}

export default WednesdaySeries