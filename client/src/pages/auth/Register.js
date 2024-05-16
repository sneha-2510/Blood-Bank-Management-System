import React from 'react'
import Form from '../../components/shared/Form/Form'

const Register = () => {
  return (
      <>
      {/* {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : ( */}
        <div className="row g-0">
          <div className="col-md-6 form-banner ">
            <p>image</p>
            {/* <img src="./assets/images/banner2.jpg" alt="registerImage" /> */}
          </div>
          <div className="col form-container" style={{display:"flex",justifyContent:'center',alignItems:"center"}}>
            <div className='card shadow'>
              <div className='card-body'>
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
            </div>
            </div>
          </div>
        </div>
      {/* )} */}
    </>
  )
}

export default Register