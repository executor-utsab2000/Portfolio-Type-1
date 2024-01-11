import React from 'react'
import errorCss from './Error.module.css'

const Error = () => {
  return (
    <>

      <div className="container my-5 px-lg-5 px-3 w-75">
        <div className={`row pt-5  ${errorCss.errorContainer}`}>
          <div className="col-12">
            <img src="Images/error.png" alt="" className={errorCss.image} />
          </div>

          <div className={errorCss.contentWrapper}>
            <div className="col-12 mt-5">

              <h1> This Site can't  be reached</h1>
              <p className={errorCss.txt1}>
                <strong>utsabsarkar.me</strong> took too long to respond .
              </p>


              <p className={errorCss.txt2}>
                Try : <br />
                <ul>
                  <li>Checking the connection</li>
                  <li> <span style={{ color: '#1E88E5' }}>Checking the proxy and the firewall</span></li>
                </ul>

              </p>

              <p className={errorCss.txt3}>
                err_connection_timed_out
              </p>

            </div>

            <div className="col-12 d-flex justify-content-between mt-4">
            <button>Details</button>
            <button className={`btn btn-primary ${errorCss.btn2}`} onClick={() => window.location.reload()}>Reload</button>
          </div>
          </div>



           <div >
            <img src="Images/errorHappy.png" alt="" className={errorCss.imgHappy}/>
            </div> 




        </div>
      </div>

      

    </>
  )
}

export default Error
