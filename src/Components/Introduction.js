import React from 'react'

function Introduction() {
  return (
    <div className='flex flex-col bg-light-background text-[#fff] pb-8'>
     <div className="mt-4 text-center p-4">
      <h2 className="p-1 text-4xl">Nice to meet you.</h2>
      </div>
      <div className="flex text-center pb-5 mb-5 justify-center">
        <h3 className='max-w-[75vw]'>I am a full stack web developer and designer. I specialize in turning ideas into beautiful, functioning, applications.
                I have had the privilage of working freelance with some amazing individuals on their own personal projects as well as working full time as an
                in house developer. When I'm not creating web apps I enjoy getting in a good workout or teaching my dog some new tricks.
        </h3>
      </div>
    </div>
  )
}

export default Introduction