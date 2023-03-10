import React from 'react'
import Project from './Project'

function ProjectsContainer():JSX.Element {
  return (
   <div className="dark:bg-dark-background">
      <h2 className="mx-auto text-4xl dark:text-dark-text-primary">Recent Projects</h2>
        <div className="col-12 mt-2 d-flex justify-content-center pb-5">
            <p className="dark:text-dark-text-primary">Here are some of my recent projects</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center w-full">
            <Project title={"Spume IO"} description={"Led front end development of Spume Marketplace. Created using Next.js, React.js, Tailwind CSS,GraphQL, and Apollo Client. This is a fully functioning NFT marketplace where you can buy and sell NFT's."} 
            imgSrc={"images/spume-cover.png"} url={"https://app.spume.io"}/>
            <Project title={"Order Up"} description={"E-Commerce site for a created using React.js, Typescript, Next.js, Tailwind CSS, Node.js and Stripe API"} 
            imgSrc={"images/orderup-3.png"} url={"https://getorderup.com"}/>
        </div>
        {/* <div className="flex flex-col sm:flex-row justify-center w-full">
            <div className='w-100'></div>
            <Project title={"A Fasted Life"} description={"A book landing page created for a local author using HTML, CSS, and Bootstrap."} 
            imgSrc={"images/renner.jpg"} url={"https://a-fasted-life.web.app/"}/>
            <Project title={"Public Speaker Webpage"} description={"Custom website created for Pastor Paul Daugherty in Tulsa Oklahoma. Built using HTML, Bootstrap, CSS, and Javascript."} 
            imgSrc={"images/PD.png"} url={"https://speaker-webpage.web.app"}/>
        </div> */}
    </div>
  )
}

export default ProjectsContainer
