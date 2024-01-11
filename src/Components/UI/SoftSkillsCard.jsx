import React from 'react'
import softSkillsCardCss from './SoftSkillsCard.module.css'
import { defer } from 'react-router-dom';


const skillData =[
    {
        icon : 'fa-solid fa-circle-exclamation',
        color : '#2196F3',
        header : 'attentive',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos .',
    } ,
    {
        icon : 'fa-solid fa-gears',
        color : '#F44336',
        header : 'systemetic',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos .',
    } ,
    {
        icon : 'fa-solid fa-scale-balanced',
        color : '#FDD835',
        header : 'strong work ethics',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos .',
    } ,
    {
        icon : 'fa-solid fa-lightbulb',
        color : '#2ECC71',
        header : 'idealistic',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos .',
    } ,
    {
        icon : 'fa-solid fa-handshake',
        color : '#1976D2',
        header : 'co-operatve',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos .',
    } ,
    {
        icon : 'fa-solid fa-pen-nib',
        color : '#616161',
        header : 'practical',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos .',
    } 
]










const SoftSkillsCard = (props) => {

    const {icon , color , header , description} = props ;


  return (
<>

    <div className={softSkillsCardCss.card} style={{borderColor: color}}>


            <div className={softSkillsCardCss.shapesContainer}>
                <div className={softSkillsCardCss.topTriangle} style={{borderBottomColor : color}}></div>
                <div className={softSkillsCardCss.rectangle} style={{backgroundColor : color}}>
                   <i className={icon}></i>
                </div>
                <div className={softSkillsCardCss.bottomTriangle} style={{borderTopColor : color}} ></div>
            </div>


            <div className={softSkillsCardCss.content}>
                <p className={softSkillsCardCss.header}>{header}</p>
                <p className={softSkillsCardCss.desc}>{description}</p>
            </div>








    </div>


    </>
  )
}

export { SoftSkillsCard , skillData } 
