import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <div className="flex flex-row items-center gap-4">
        <img src={logo} alt='shorty_logo' className='h-16 w-16 border-green-500 p-2 rounded-full ' />
         <h1 className="font-bold text-xl">The Shorty</h1>
        </div>

      
        <a href="https://github.com/wazzer1803" target="_blank">
        <button className="bg-black text-white  border border-white p-2 rounded-lg">
          GitHub

        </button>
        </a>
        
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='blue_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with THE SHORTY, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;