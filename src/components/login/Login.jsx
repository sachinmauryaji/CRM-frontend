import React from 'react'

export const Login = ({handleOnChange,handleonSubmit,formSwitcher,email,pass}) => {
  return (
    <><div className="container-row-col">
                <h1 className='text-info text-center'>Client login</h1>
                    <hr/>
<div className="mb-3 form"  >
  <label  className="form-label">Email Address</label>
  <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" value={email} onChange={handleOnChange} required />
  <label  className="form-label">Password</label>
  <input type="password" name="password" className="form-control" id="exampleFormControlInput2" placeholder="password"  value={pass} onChange={handleOnChange} required />
</div>
<button type="submit" onClick={handleonSubmit}  className="btn btn-primary">Sign in</button>
<hr />
<a className='link-underline link-underline-opacity-0 link-opacity-50-hover' onClick={()=>formSwitcher('reset')} href="#!">Forget Password?</a>
  </div></>
  )
}
