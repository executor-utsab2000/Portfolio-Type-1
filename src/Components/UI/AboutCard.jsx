import React from "react";
import aboutCardStyles  from "./AboutCard.module.css";
// component data

const shapesData =[
    {
        icon: 'fa-solid fa-paintbrush' ,
        color :'#2196F3',
        text :'Graphics Designing'
    },
    {
        icon: 'fa-solid fa-globe' ,
        color :'#FDD835',
        text :'Web Designing'
    },
    {
        icon: 'fa-solid fa-database' ,
        color :'#F44336',
        text :'Web Development'
    },
    
]


// -----------------------------------------------------------------------------



// component creation

const AboutCard = (props)=>{
// console.log(props);
    const { icon , color , text} = props ;

    return(
        <div className={aboutCardStyles.card} style={{borderBottom :`3px solid ${color}`}}>
        <div className="row">
        <div className="col-12 ">
          <i className={icon}  style={{color :color , fontSize : '2rem'}}></i>
        </div>
        <div className="col-12 mt-2">
          {text}
        </div>
        </div>      
      </div>
    )

} ;

export  {AboutCard , shapesData} ;