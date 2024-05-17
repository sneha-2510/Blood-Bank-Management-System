import React from 'react'
import Form from '../../components/shared/Form/Form';
import { useSelector } from 'react-redux';
import Spinner from '../../components/shared/Spinner';
import toast from 'react-hot-toast';


const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-6 form-banner">

            <img src="./assets/images/image1.jpg" alt="loginImage" />
          </div>
          <div className="col form-container" style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
            <div className='card shadow'>
              <div className='card-body'>
                <Form
                  formTitle={"Login Page"}
                  submitBtn={"Login"}
                  formType={"login"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Login;