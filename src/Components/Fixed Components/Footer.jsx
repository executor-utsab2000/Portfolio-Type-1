import React from 'react'
import footerStyles from './Footer.module.css'

const Footer = () => {
    return (
        <div className="row mx-0 px-0">
            <div className={`col-12 py-5 text-center  ${footerStyles.footer}`}>
                <h3>The Information provided here are subjected to Copyright</h3>
                <h5>The Website is created by Utsab Sarkar</h5>
            </div>
        </div>
    )
}

export default Footer
