import React from 'react'
import navStyles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav className={`row mx-0 ${navStyles.bgNav}`}>
      <div className={navStyles.bgNavoverlay}></div>

        <div className='px-0'>
        <div className="col-12 d-flex justify-content-center" style={{ marginTop: '3rem' }}>
          <img src="./Images/dp.jpg" alt="DP" className={`img-fluid ${navStyles.Dp}`} />
        </div>
        <div className="col-12 mt-3 text-center">
          <span className={navStyles.navName}>Utsab Sarkar</span> <br />
          <span className={navStyles.designation}>𝗙𝘂𝗹𝗹 𝗦𝘁𝗮𝗰𝗸 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿</span>
        </div>
        <div className="col-12 mt-3   d-flex justify-content-center">
          <hr />
        </div>



        <div className="row mx-0 px-0">
          <div className="col-12 text-center my-1">
            <a className={`nav-link ${navStyles.navLink}`} href="#top">home</a>
          </div>
          <div className="col-12 text-center my-1">
            <a className={`nav-link ${navStyles.navLink}`} href="#skills">Skills</a>
          </div>
          <div className="col-12 text-center my-1">
            <a className={`nav-link ${navStyles.navLink}`} href="#education">Qualifications</a>
          </div>
          <div className="col-12 text-center my-1">
            <a className={`nav-link ${navStyles.navLink}`} href="#expertize">Expertize</a>
          </div>
          <div className="col-12 text-center my-1">
            <a className={`nav-link ${navStyles.navLink}`} href="#project">Projects</a>
          </div>
          <div className="col-12 text-center my-1">
            <a className={`nav-link ${navStyles.navLink}`} href="#about">About</a>
          </div>
          <div className="col-12 text-center my-1">
            <a className={`nav-link ${navStyles.navLink}`} href="#contact">Contact</a>
          </div>
        </div>
        <div className="row mx-0 px-0 mt-4">
          <div className={`col-12 py-5 d-flex justify-content-center text-center ${navStyles.footerBig}`}>

            <table>
              <tbody>
                <tr>
                  <td>
                    <a href=""><i class={`fa-brands mx-1 fa-facebook ${navStyles.facebook} `}></i></a>
                  </td>
                  <td>
                    <a href=""><i class={`fa-brands mx-1 fa-github ${navStyles.github}`}></i></a>
                  </td>
                  <td>
                    <a href=""><i class={`fa-brands mx-1 fa-linkedin ${navStyles.linkedin}`}></i></a>
                  </td>
                  <td>
                    <a href=""><i class={`fa-brands mx-1 fa-instagram ${navStyles.instagram}`}></i></a>
                  </td>
                  <td>
                    <a href="mailto:utsabsarkar00@gmail.com"><i class={`fa-solid mx-1 fa-envelope ${navStyles.email}`}></i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      
      </nav>










      <nav class={`navbar navbar-expand-lg navbar-light py-3 ${navStyles.smallNav}`}>
        <div class="container-fluid">
          <span class="navbar-brand">
            <img src="./Images/dp.jpg" alt="DP" className={`img-fluid ${navStyles.DpSmall}`} />
          </span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="fa-solid fa-bars text-info" style={{fontSize :"1.5rem"}}></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mt-5">
              <li class="nav-item my-1 ">
                <a className={`nav-link ${navStyles.navLink}`} href="#top">home</a>
              </li>
              <li class="nav-item my-1 ">
                <a className={`nav-link ${navStyles.navLink}`} href="#skills">Skills</a>
              </li>
              <li class="nav-item my-1 ">
                <a className={`nav-link ${navStyles.navLink}`} href="#education">Qualifications</a>
              </li>
              <li class="nav-item my-1 ">
              <a className={`nav-link ${navStyles.navLink}`} href="#expertize">Expertize</a>
              </li>
              <li class="nav-item my-1 ">
                <a className={`nav-link ${navStyles.navLink}`} href="#project">Projects</a>
              </li>
              <li class="nav-item my-1 ">
                <a className={`nav-link ${navStyles.navLink}`} href="#about">About</a>
              </li>
              <li class="nav-item my-1 ">
                <a className={`nav-link ${navStyles.navLink}`} href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar;
