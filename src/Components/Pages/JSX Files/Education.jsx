import React, { useState } from 'react'
import educationCss from './Module Css Files/Education.module.css'
 
const educationData = [
    {
        accordianId: "graduation",
        header: 'Graduation',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque doloribus, cumque temporibus harum id illo exercitationem mollitia ad atque.',
        year :2022 ,
        headinstitute : 'University of Calcutta' ,
        institute :'Lalaba College , Belur' ,
    },

    {
        accordianId: "hs",
        header: 'Higher Secondary Examination',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque doloribus, cumque temporibus harum id illo exercitationem mollitia ad atque.',
        year :2019 ,
        headinstitute : 'the West Bengal Council of Higher Secondary Education' ,
        institute :'uttarpara Govt. High school' ,
    },

    {
        accordianId: "mdhmyk",
        header: 'Madhyamik Examination',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque doloribus, cumque temporibus harum id illo exercitationem mollitia ad atque.',
        year :2017 ,
        headinstitute : 'West Bengal Board of Secondary Education ' ,
        institute :'h. m. eduation center ' ,
    },

]
















const EducationAccordian = (props) => {
    const { id, header, desc, bgColor , year , headInst , inst } = props;


    return (

        <div class="accordion" data-aos="fade-up" >
            <div class="accordion-item">


                <span class='accordion-header'>
                    <button class={`accordion-button ${educationCss.accordianHeader}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="true" >
                        {props.header}
                    </button>
                </span>


                <div id={props.id} class='accordion-collapse collapse '>
                    <div class={`accordion-body ${educationCss.accordianBody}`}>
                    {props.desc}
                <div className="col-12">
                    <p><i class="fa-solid fa-angles-right mx-4 mt-4"></i>Year of Passing :<span>{year}</span></p>
                    <p><i class="fa-solid fa-angles-right mx-4"></i>University/Board :<span>{headInst}</span></p>
                    <p><i class="fa-solid fa-angles-right mx-4 mb-4"></i>Institution :<span>{inst}</span></p>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




const Education = (props) => {

    const [data , setData] =useState(educationData)


    return (
        <>
            <div className="row " id='education' style={{ marginTop: '5rem' , marginBottom:'0' }}>
                <div className="col-12 px-0">
                    <div className=''>
                        <div className="container my-0">
                            <div className="row mx-0">



                                <div className="col-12" data-aos="fade-up">
                                    <p className='smallHeader'>
                                     education i accquire
                                    </p>
                                    <p className="bigHeader">Qualifications</p>
                                </div>

                               {

                                data.map((dataElm)=>{

                                    return(
                                        <div className="col-lg-12 mt-2">
                                            <EducationAccordian  id ={dataElm.accordianId} header ={dataElm.header} desc ={dataElm.description} bgColor ={dataElm.bgColor} year ={dataElm.year} headInst={dataElm.headinstitute} inst={dataElm.institute} />
                                        </div>
                                    )
                                })

                               }

                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Education
