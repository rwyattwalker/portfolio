import React from 'react'
import { ThemeContext } from '../../ThemeContext'

const RenderHero = () => {
   const { theme } = React.useContext(ThemeContext);
  return (
    <div className="bg-white dark:bg-dark-background">
        <div className="flex flex-col dark:bg-dark-backgroud">
          <div className="mt-4">
                <h1 className="text-4xl mt-4 pt-2 dark:text-dark-text-primary">Hi, I'm Wyatt</h1>
            </div>
            <div className="mt-4">
                <p className='dark:text-dark-text-primary'>I design and code intuitively simple yet beautiful web applications</p>
            </div>
        </div>
        <div className="flex flex-col dark:bg-dark-backgroud">
            <div className="mt-4">
                <img src="images/me.png" alt="Avatar"  className="mx-auto d-block max-w-[300px]" />
            </div>
        </div>
        <div className="flex flex-col dark:bg-dark-backgroud">
            <div className="mt-4">
              {theme === 'dark'
                ? <img src="images/hero-dark.png" alt="hero-darkmode"  className="mx-auto d-block hero-img" />
                : <img src="images/hero-light.png" alt="hero-lightmode"  className="mx-auto d-block hero-img" />
              }
            </div>
        </div>
    </div>
  )
}

export default RenderHero
