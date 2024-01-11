import React, { useEffect, useState } from 'react'
import landingStyles from './Module Css Files/Landing.module.css'
import navCss from '../../Fixed Components/Navbar.module.css'

const Landing = () => {

  const [img, setImg] = useState(true)



  const imgChange = () => {
    setImg(!img)
  }



  useEffect(() => {
    const imgChangeFunc = setInterval(() => {
      imgChange()
    }, 3000)

    return () => clearInterval(imgChangeFunc)
  }, [img])





  return (
    <div className="row">
      <div className="col-12 px-0 ">
        <div className={landingStyles.Bg}>

          <div className="container">
            <div className="row mx-0">
              <div className="col-lg-5 d-flex justify-content-center " data-aos="fade-up">
                <div className={landingStyles.canvasStyle}>
                  <img src={img ? './Images/pic.png' : './Images/img2.png'} alt="" className='img-fluid' />
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0" data-aos="fade-up">
                <p className={landingStyles.hii}>Hi, I'm</p>
                <p className={landingStyles.name}><span>Utsab</span> Sarkar</p>
                <p className={landingStyles.bio}>
                  I'm a professional and passionate full-stack developer with expertise in front-end (HTML, CSS, JS) and back-end (MySql , PhP), adept at creating responsive, user-centric web applications. Strong problem-solving skills and a collaborative team player.
                </p>
                <p>
                  <div className="col-7 mt-5 mx-auto" data-aos="fade-up">
                    <div className="row">
                      <div className=" col-md-2 col-4 mx-auto my-3  ">
                        <a href=""><i class={`fa-brands fa-beat fa-facebook ${navCss.facebook} `}></i></a>
                      </div>
                      <div className=" col-md-2 col-4 mx-auto my-3  ">
                        <a href=""><i class={`fa-brands fa-beat fa-github ${navCss.github}`}></i></a>
                      </div>
                      <div className=" col-md-2 col-4 mx-auto my-3  ">
                        <a href=""><i class={`fa-brands fa-beat fa-instagram ${navCss.instagram}`}></i></a>
                      </div>
                      <div className=" col-md-2 col-4 mx-auto my-3  ">
                        <a href=""><i class={`fa-brands fa-beat fa-linkedin ${navCss.linkedin}`}></i></a>
                      </div>
                      <div className=" col-md-2 col-4 mx-auto my-3  ">
                        <a href="mailto:utsabsarkar00@gmail.com">
                          <i className={`fas fa-envelope ${navCss.email}`}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </p>


              </div>
            </div>

          </div>





        </div>
      </div>
    </div>
  )
}

export default Landing
