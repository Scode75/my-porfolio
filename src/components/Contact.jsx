import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/4a491a63-6492-4c10-9bfd-3137cd595779' className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inlin border-b-4 border-red-600 text-gray-300'>Conatct</p>
            <p className='text-gray-300 py-4'>// Submit the form below or send me an email - stevanth75@gmail.com</p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-red-600 hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Talk</button>
        </form>
    </div>
  )
}

export default Contact