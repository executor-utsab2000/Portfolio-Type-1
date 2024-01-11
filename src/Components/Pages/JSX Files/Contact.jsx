import React , {useState} from 'react'
import contactStyles from './Module Css Files/Contact.module.css'


const contactFormBelowData =[
    {
        header:'email' ,
        desc :'utsabsarkar00@gmail.com',
    },
    {
        header:'contact' ,
        desc :'869750****',
    },
    {
        header:'linkedin' ,
        desc :'Utsab Sarkar',
    },
    
]




const Contact = () => {

    const [ data ,setData] = useState(contactFormBelowData)


    return (
        <>

            <div className="row " id='contact' style={{ marginTop: '5rem' }} >
                <div className="col-12 px-0">
                    <div className=''>
                        <div className="container">
                            <div className="row mx-0">



                                <div className="col-12" data-aos="fade-up">
                                    <p className='smallHeader'>
                                        Contact me
                                    </p>
                                    <p className="bigHeader">get in touch</p>
                                </div>


                                <div className="col-12 mt-3">
                                    <form action="">

                                        <div className="row">

                                            <div className="col-lg-8">
                                                <div className="row">

                                                    <div className="col-lg-12 px-4 my-3" data-aos="fade-up">
                                                        <div class={contactStyles.coolinput}>
                                                            <label for="input" class="text">First Name:</label>
                                                            <input type="text" placeholder="Write here..." name="inputFirstName" class="input" autoComplete='off' />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 px-4 my-3" data-aos="fade-up">
                                                        <div class={contactStyles.coolinput}>
                                                            <label for="input" class="text">Last Name:</label>
                                                            <input type="text" placeholder="Write here..." name="inputLastName" class="input" autoComplete='off' />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 px-4 my-3" data-aos="fade-up">
                                                        <div class={contactStyles.coolinput}>
                                                            <label for="input" class="text">Email:</label>
                                                            <input type="text" placeholder="Write here..." name="inputEmail" class="input" autoComplete='off' />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 px-4 my-3" data-aos="fade-up">
                                                        <div class={contactStyles.coolinput}>
                                                            <label for="input" class="text">Message:</label>
                                                            <textarea placeholder="Write here..." name="input" class="input" rows={8} autoComplete='off'></textarea>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>




                                            <div className="col-lg-4  mt-4 mb-3" > 
                                                <div className="row py-5">

                                                        {
                                                            data.map((elm)=>{
                                                                
                                                                return(
                                                                    <div className="col-lg-12 col-md-4 d-flex justify-content-center px-5 mb-4 " data-aos="fade-up" style={{flexDirection:'column'}}>
                                                                    <p className={contactStyles.contactFormRightHeader}>{elm.header}</p>
                                                                    <p className={contactStyles.contactFormRightText}>{elm.desc}</p>
                                                                    <hr className={contactStyles.contactFormRightHr} />
                                                                    
                                                                </div>
                                                                )

                                                            })
                                                        }

                                                </div>
                                            </div>











                                        </div>
















                                    </form>
                                </div>






                            </div>
                        </div>
                    </div>
                </div>
            </div>










        </>
    )
}

export default Contact
