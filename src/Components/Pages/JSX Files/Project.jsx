import React, { useState } from 'react'
import ProjectCard, { projectCardData } from '../../UI/ProjectCard';
import projectStyle from './Module Css Files/Project.module.css'




const belowDivData = [
    {
        icon: 'fa-solid fa-puzzle-piece',
        caption: 'Total Projects',
        count: '30+'
    },
    {
        icon: 'fa-regular fa-clock',
        caption: 'Average Time Consumed',
        count: '5 days'
    },
    {
        icon: 'fa-regular fa-clock',
        caption: ' Minimum Time Consumed',
        count: '2 days'
    },
    {
        icon: 'fa-regular fa-clock',
        caption: 'Maximum Time Consumed',
        count: '8 days'
    },
]









const BelowDivDisplay = (props) => {




    return (
        <table className={projectStyle.table} >
            <tbody>
                <tr>
                    <td>
                       <i className={props.icon}></i>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className={projectStyle.belowDivCaption}>{props.caption}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span className={projectStyle.belowDivCount}>{props.count}</span>
                    </td>
                </tr>
            </tbody>
        </table >
    )
}
























const Project = (props) => {


    const [data, setData] = useState(projectCardData) ;
    const [data2, setData2] = useState(belowDivData)






    return (
        <>
            <div className="row " id='project' style={{ marginTop: '5rem' }}>
                <div className="col-12 px-0">
                    <div className=''>
                        <div className="container">
                            <div className="row mx-0">



                                <div className="col-12" data-aos="fade-up">
                                    <p className='smallHeader'>
                                        projects i have worked on
                                    </p>
                                    <p className="bigHeader">projects</p>
                                </div>

                                <div className="col-12 my-2">
                                    <div className="row">

                                        {
                                            data.map((dataElm) => {
                                                return (
                                                    <div className="col-lg-4 col-md-6 my-2 d-flex justify-content-center" data-aos="fade-up">
                                                        <ProjectCard img={dataElm.image} header={dataElm.header} type={dataElm.type} link={dataElm.link} />
                                                    </div>
                                                )
                                            })
                                        }


                                    </div>
                                </div>



                                <div className={` mx-0 px-0 ${projectStyle.countDiv}`}>
                                    <div className={projectStyle.CountOverlay}>
                                        <div className={projectStyle.content}>

                                            <div className="row">



                                                {
                                                    data2.map((dataElm2) => {
                                                        // console.log(dataElm2);
                                                        

                                                        return(
                                                            <div className="col-md-3 col-6 d-flex justify-content-center" data-aos="fade-up"> 
                                                                <BelowDivDisplay icon={dataElm2.icon} caption ={dataElm2.caption} count ={dataElm2.count}/>
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
                </div>
            </div>





        </>
    )
}

export default Project
