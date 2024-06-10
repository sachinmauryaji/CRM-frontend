import React from 'react'
import { Login } from '../login/Login'

export const PasswordReset = ({handleOnChange,handleonSubmit,formSwitcher,email}) => {
  return (
    <><div className="container-row-col">
                <h1 className='text-info text-center'>Reset Password</h1>
                    <hr/>
<div className="mb-3 form"  >
  <label  className="form-label">Email Address</label>
  <input type="email" name="email" className="form-control" id="exampleFormControlReset1" placeholder="Enter Email" value={email} onChange={handleOnChange} required />
</div>
<button type="submit" onClick={handleonSubmit}  className="btn btn-primary">Reset Password</button>
<hr />
<a className='link-underline link-underline-opacity-0 link-opacity-50-hover' onClick={()=>formSwitcher('login')} href="#!">Login Now</a>
  </div></>
  )
}
