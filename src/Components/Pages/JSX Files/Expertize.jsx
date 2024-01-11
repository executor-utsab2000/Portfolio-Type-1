import React, { useState } from 'react'
import expertizeStyle from './Module Css Files/Expertize.module.css' 

const ExpertizeData = [
    {
        icon : 'fa-brands fa-html5' ,
        label : 'html 5' ,
        value : '90%' ,
        barColor :'#E67E22' ,
    } ,
    {
        icon : 'fa-brands fa-css3' ,
        label : 'css' ,
        value : '80%' ,
        barColor :'#2196F3' ,
    } ,
    {
        icon : 'fa-brands fa-square-js' ,
        label : 'javascript' ,
        value : '60%' ,
        barColor :'#FDD835' ,
    } ,
    {
        icon : 'fa-solid fa-j' ,
        icon2 : 'fa-solid fa-q' ,
        label : 'jQuery' ,
        value : '70%' ,
        barColor :'#1976D2' ,
    } ,
    {
        icon : 'fa-brands fa-bootstrap' ,
        label : 'Boostrap' ,
        value : '90%' ,
        barColor :'#4c0bce' ,
    } ,
    {
        icon : 'fa-brands fa-react' ,
        label : 'react' ,
        value : '50%' ,
        barColor :'#64B5F6' ,
    } ,
    {
        icon : 'fa-solid fa-database' ,
        label : 'mysql' ,
        value : '90%' ,
        barColor :'#EF5350' ,
    } ,
    {
        icon : ' fa-solid fa-p' ,
        icon2 : ' fa-solid fa-s' ,
        label : 'photoshop' ,
        value : '70%' ,
        barColor :'#3F51B5' ,
    } ,
]




const ProgressBar = (props) => {
    const { icon , icon2 , value , color , header } = props;


    return (
        <>
        <div className='mb-2'>
        <span className={expertizeStyle.faLogo} style={{color: color}}> <i className={icon} ></i></span>
        <span className={expertizeStyle.faLogo2} style={{color: color }}> <i className={icon2} ></i></span>
       <span className={`ms-3 ${expertizeStyle.header}`}> {header} </span>
        </div>
        <div class={`progress  ${expertizeStyle.progresContainer}`} role="progressbar" aria-label="striped example" aria-valuenow='' aria-valuemin="0" aria-valuemax="100" > 
            
            <div class="progress-bar progress-bar-striped  my-2 mx-1 py-1" style={{width : value ,  backgroundColor :color }}>{value}</div>
        </div>
        
        
        </>
    )
}






const Expertize = (props) => {
const [data , setData] = useState(ExpertizeData)



    return (
        <div className="row " id='expertize' style={{ marginTop: '5rem' }}>
            <div className="col-12 px-0">
                <div className=''>
                    <div className="container">
                        <div className="row mx-0">



                            <div className="col-12" data-aos="fade-up">
                                <p className='smallHeader'>
                                    field of Expertize
                                </p>
                                <p className="bigHeader">professional skills</p>
                            </div>
                            
                            <div className="col-12 mt-2">
                                <div className="row">
                                   
                                    {
                                        data.map((dataElm) => {

                                            return(
                                                <div className="col-lg-6 my-3 d-flex justify-content-center px-5" style={{flexDirection:'column'}} data-aos="fade-up">
                                                     <ProgressBar icon ={dataElm.icon} icon2= {dataElm.icon2} value ={dataElm.value} color ={dataElm.barColor} header ={dataElm.label}/>
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

    )
}

export default Expertize
