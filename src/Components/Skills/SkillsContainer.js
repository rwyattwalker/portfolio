import React from 'react'
import SkillsColumn from './SkillsColumn'
import {FaPencilRuler, FaCode, FaDatabase, FaHandshake } from 'react-icons/fa'

const SkillsContainer = () => {
  const iconStyles = "text-light-background dark:text-dark-text-primary text-[#fff] text-3xl mx-auto"
  return (
    <div className='flex flex-wrap gap-0 justify-center dark:bg-dark-background'>
       <SkillsColumn heading={'Design'} skills={['Pen and Paper', 'Photoshop']} icon={<FaPencilRuler className={iconStyles} />}/>
       <SkillsColumn heading={'Front End'} skills={['HTML5', 'CSS', 'SASS', 'Bootstrap', 'Tailwind', 'Javascript', 'TypeScript', 'jQuery', 'React', 'Redux', 'Next.js',
        'Web3.js']} icon={<FaCode className={iconStyles} />}/>
       <SkillsColumn heading={'Back End'} skills={['GraphQL', 'Apollo Client', 'Node.js', 'Express', 'Solidity', 'MySQL', 'SQL', 'MongoDB', 'Mongoose']} 
        icon={<FaDatabase className={iconStyles}/>} />
       <SkillsColumn heading={'Utilites and Methodologies'} skills={['Agile', 'Scrum', 'Jira', 'Git', 'Github', 'Firebase', 'Vim', 'Jest']} 
        icon={<FaHandshake className={iconStyles}/>}/>
    </div>
  )
}

export default SkillsContainer