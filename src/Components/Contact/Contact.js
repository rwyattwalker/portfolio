import React from 'react'

function Contact() {
  return (
     <div className="dark:bg-dark-background dark:text-dark-text-primary" id="contact">
        <div className="">
            <div className="flex justify-center pt-4">
                <h2 className="text-3xl">Interested in working together?</h2>
            </div>
            <div className="mt-1 mb-2 flex justify-center">
                <p className="contact-text">Let's get in touch</p>
            </div>
            <div className="flex justify-center pb-10">
                    <a  href="https://www.linkedin.com/in/wyatt-walker-aa182b138" rel="noreferrer" target="_blank"><i className="fab fa-linkedin fa-2x p-1 footer-icon"></i></a>
                    <a  href="https://github.com/rwyattwalker" rel="noreferrer" target="_blank"><i className="fab fa-github-square fa-2x p-1 footer-icon"></i></a>
                    <a  href="mailto:rwyattwalker@gmail.com" rel="noreferrer" target="_blank"><i className="fa fa-envelope-square fa-2x p-1 footer-icon"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Contact