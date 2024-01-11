import React, { useState } from 'react'
import { SoftSkillsCard , skillData } from  '../../UI/SoftSkillsCard'

const Skills = () => {

    const [skillCardData , setSkillCardData] =useState(skillData)




  return (
   <>
   
   <div className="row " id='skills' style={{marginTop:'4rem'}}> 
            <div className="col-12 px-0 ">
                <div className=''>
                    <div className="container-fluid">
                        <div className="row mx-0">



                            <div className="col-12" data-aos="fade-up">
                            <p className='smallHeader'>
                             Skills i possess 
                            </p>  
                            <p className="bigHeader">Soft Skills</p>  
                            </div>          

                            <div className="col-12">
                            <div className="row">



                            {
                                skillCardData.map ((dataElements)=>{
                                    console.log(dataElements);
                                    

                                    return(
                                        <div className="col-lg-4 col-md-6 my-3 d-flex justify-content-center" data-aos="fade-up">
                                            <SoftSkillsCard  icon ={dataElements.icon} color={dataElements.color} header={dataElements.header} description={dataElements.description}/>
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

export default Skills
