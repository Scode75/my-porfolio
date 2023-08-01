import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realestate from '../assets/realestate.jpg'
import portfolio1 from '../assets/portfolio-1.jpg'
import portfolio2 from '../assets/portfolio-2.jpg'
import portfolio3 from '../assets/portfolio-3.jpg'
import portfolio5 from '../assets/portfolio-5.jpg'
import portfolio4 from '../assets/portfolio-4.jpg'
import portfolio6 from '../assets/portfolio-6.jpg'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Work</p>
                <p className='py-6'>// Check out some of my works</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${portfolio5})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Simple Quiz App.
                        </span>
                        <div className='pt-8 text-center'>
                             <a href='https://steve-quizie-world.netlify.app' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                             </a>
                             <a href='https://github.com/Scode75/Quizie-world.git' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                             </a>
                        </div>
                    </div>
                </div>
                
                <div style={{backgroundImage: `url(${portfolio2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Digital Clock App
                        </span>
                        <div className='pt-8 text-center'>
                             <a href='https://steve-digitalclock.netlify.app' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                             </a>
                             <a href='https://github.com/Scode75/Digital-clock.git' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                             </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${portfolio6})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Row-Counter App
                        </span>
                        <div className='pt-8 text-center'>
                             <a href='https://row1-counter.netlify.app' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                             </a>
                             <a href='https://github.com/Scode75/my-rowcounter1-app.git' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                             </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${portfolio4})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        BlackJack Game
                        </span>
                        <div className='pt-8 text-center'>
                             <a href='https://myblackjack-cat.netlify.app' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                             </a>
                             <a href='https://github.com/Scode75/blackjack-game.git' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                             </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${portfolio1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Multiplication App
                        </span>
                        <div className='pt-8 text-center'>
                             <a href='https://github.com/Scode75/Multiplication-for-all.git' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                             </a>
                             <a href='https://github.com/Scode75/Multiplication-for-all.git' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                             </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${portfolio3})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        CSS Variable Changer
                        </span>
                        <div className='pt-8 text-center'>
                             <a href='https://css-variable-changer.netlify.app' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                             </a>
                             <a href='https://github.com/Scode75/css-variables-changer.git' target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                             </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work