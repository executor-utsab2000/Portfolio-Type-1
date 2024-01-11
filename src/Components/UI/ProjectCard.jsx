import React from 'react'
import ProjectCardStyle from './ProjectCard.module.css'


const projectCardData =[
    {
        image : 'Images/Projects/academia.png',
        header :'Academia',
        type :'Educational Website' ,
        link : 'https://heroic-tiramisu-c817cc.netlify.app/',

    } ,
    {
        image : 'Images/Projects/crown resto.jpeg',
        header :'Crown Resto',
        type : 'Restaurant Website' ,
        link : 'https://crownrestobyexecutor.netlify.app',

    } ,
    {
        image : 'Images/Projects/casio.jpeg',
        type :  'Game' ,
        header :'Cassio Game',
        link : 'https://cassiogamebyexecutor.netlify.app',

    } ,
    {
        image : 'Images/Projects/music.jpeg',
        header :'pagalworld.com',
        type :'Music Website' ,
        link : 'https://flourishing-seahorse-29876f.netlify.app',

    } ,
    {
        image : 'Images/Projects/freelancing.jpeg',
        header :'FreeLancing ',
        type :'Dummy' ,
        link : '',

    } ,
    {
        image : 'Images/Projects/landing.jpeg',
        header :'Landing Page',
        type :'Dummy ' ,
        link : 'https://flourishing-seahorse-29876f.netlify.app/',

    } ,
]






const ProjectCard = (props) => {




    return (
        <>

            <div className={`card ${ProjectCardStyle.cardContainer}`}>
                <img src={props.img} className="card-img-top" alt="..." />
                <hr />
                <div className="card-body">
                    <h4 className="card-title">{props.header}</h4>
                    <h6 className="card-title">( {props.type}   ) </h6>

                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a target='blank' href={props.link} className="btn btn-primary">Live Preview</a>
                </div>
            </div>


        </>
    )
}

export default ProjectCard ;
export { projectCardData } ;
