import React from 'react'

function Project({title, description, imgSrc, url}) {
  return (
    <div className= "flex justify-center pb-6 mx-1 my-2">
      <div className="content">
        <div className="content-overlay"></div>
        <img className="project img-fluid content-image rounded-2xl" alt="project" src={imgSrc} />
        <div className="content-details fadeIn-left">
          <h3 className='font-semibold'>{title}</h3>
          <p className='text-base text-[#fff] mb-5'>{description}</p>
          <a className="w-fit p-3 mt-3 rounded-xl border border-[#fff] text-[#fff]" href={url}>Visit Website</a>
        </div>
      </div>
    </div>
  )
}

export default Project