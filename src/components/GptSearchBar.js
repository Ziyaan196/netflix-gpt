import { useSelector } from 'react-redux';
import lang from '../utils/constantsLanguage';

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className='w-full flex items-start justify-center pt-32'>
      <form className="flex items-center w-8/12 mx-auto gap-2">
        <input 
          type="text" 
          placeholder={lang[langKey].gptSearchPlaceholder}
          className='flex-1 h-11 rounded-md bg-white text-black px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' 
        />
        <button 
          type="submit" 
          className='bg-[#e50914] text-white px-6 py-2.5 rounded-md hover:bg-[#f40612] hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap'
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar