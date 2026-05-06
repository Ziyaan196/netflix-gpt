import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { BG_IMG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
       <div className="absolute -z-10 w-full ">
        <img
          src= {BG_IMG_URL}
          alt="Login"
        ></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch