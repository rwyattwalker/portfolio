import React from 'react'
interface Props{
    heading:string,
    skills:string[],
    icon: any
}

function SkillsColumn({heading, skills, icon}:Props) {
  return (
    <div className="flex  mb-5 -mt-12 " id="skills-row" >
    <div className="w-[95vw] mb-10 sm:mb-5 sm:w-[17rem] skill-column bg-[#fff] dark:bg-[#1e1e1e] shadow-lg border border-[#E6ECF8] dark:border-[#2d3033] dark:text-[#fff] rounded pb-4">
        <div className = "p-2">
          {icon}
          <h2 className='text-3xl'>{heading}</h2>
            {skills.map((e)=>{
              return <p>{e}</p>
            })}
        </div>
      </div>
    </div>
  )
}

export default SkillsColumn
