import React , {useEffect} from 'react'
import mainStyles from  './Main.module.css'
import AOS from 'aos';
// import mainIconStyles from '../Fixed Components/Navbar.module.css'




import Navbar from '../Fixed Components/Navbar'
import Landing from '../Pages/JSX Files/Landing'
import About from '../Pages/JSX Files/About'
import Skills from '../Pages/JSX Files/Skills'
import Education from '../Pages/JSX Files/Education'
import Expertize from '../Pages/JSX Files/Expertize'
// import ProjectCard from '../UI/ProjectCard'
import Project from '../Pages/JSX Files/Project'




import Footer from '../Fixed Components/Footer'
import Contact from '../Pages/JSX Files/Contact'




const MainContent = () => {




    useEffect(() => {
        AOS.init({
            easing : "linear" ,
            duration : "1500"
        }); // Initialize AOS
      }, []);



    return (
        <>



            <div className="row mx-0 " >
                <div className={`col-lg-3 mx-0 px-0 ${mainStyles.navScroll}`}> 
                    <Navbar />
                </div>




                <div className={`col-lg-9 mx-0 px-0  ${mainStyles.mainBg}`} >

                    <div className="row mx-0 px-0">
                        <div className="col-12 ">
                            <Landing />
                        </div>
                        <div className="col-12 ">
                            <About />
                        </div>
                        <div className="col-12 ">
                            <Skills />
                        </div>
                        <div className="col-12 ">
                            <Education />
                        </div>
                        <div className="col-12 ">
                            <Expertize />
                        </div>
                        <div className="col-12 ">
                            <Project/>
                        </div>
                        <div className="col-12 ">
                            <Contact/>
                        </div>
                        <div className="col-12  px-0">
                            <Footer/>
                        </div>



                    </div>
                </div>
            </div>


            <div className="row">
            <div className="col-12" >
                          <table className={mainStyles.iconTable}>
                          <tbody>
                            <tr>
                                <td>
                                <a href=""><i class={`fa-brands mx-1 my-2 fa-facebook ${mainStyles.facebook} `}></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <a href=""><i class={`fa-brands mx-1 my-2 fa-github ${mainStyles.github}`}></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <a href=""><i class={`fa-brands mx-1 my-2 fa-linkedin ${mainStyles.linkedin}`}></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <a href=""><i class={`fa-brands mx-1 my-2 fa-instagram ${mainStyles.instagram}`}></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <a href="mailto:utsabsarkar00@gmail.com"><i class={`fa-solid mx-1 my-2 fa-envelope ${mainStyles.email}`}></i></a>
                                </td>
                            </tr>
                          </tbody>
                          </table>                  
                        </div>

            </div>




        </>
    )
}

export default MainContent
