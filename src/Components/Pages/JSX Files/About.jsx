import React, { useState } from 'react'
import '../../Pages/JSX Files/Module Css Files/GeneralHeaders.css' ;
import  { AboutCard , shapesData } from '../../UI/AboutCard';




// -----------------------------------------------------------------------------

const About = (props) => {

    const [cardData , setCaardData] =useState(shapesData)

  return (
    <>
      
        <div className="row " id='about' style={{marginTop:'4rem'}}> 
            <div className="col-12 px-0">
                <div className=''>
                    <div className="container">
                        <div className="row mx-0">



                            <div className="col-12" data-aos="fade-up">
                            <p className='smallHeader'>
                              about us  
                            </p>  
                            <p className="bigHeader">Who am i ?</p>  
                            </div> 
                            <div className="col-12 " style={{color : "#566573" , lineHeight:'20px' , fontWeight:'500' , marginTop:'2.5rem'}} data-aos="fade-up">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab doloribus nisi pariatur hic ex at vero molestias temporibus porro sed mollitia doloremque odit repudiandae quaerat, aliquam nulla deleniti delectus distinctio impedit incidunt. Numquam ratione voluptas dignissimos maiores esse impedit.
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aperiam corrupti et amet accusamus est repudiandae facere odio placeat nostrum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aperiam corrupti et amet .
                            </p>
                            </div>         

                            <div className="col-12">
                            <div className="row">


                                    {
                                        cardData.map((data) =>{
                                        // console.log(data) ;

                                        return(
                                            <div className="col-lg-4 col-md-6 mx-auto my-5 d-flex justify-content-center" data-aos="fade-up">
                                                <AboutCard icon ={data.icon}  color = {data.color} text = {data.text}/>
                                            </div>
                                        )

                                        })
                                    } 

                            </div>
                            </div>

                                                





                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
  )
}

export default About



// creation of data pf component
// creation of component
// calling of component in other component and passing of data by props to component
