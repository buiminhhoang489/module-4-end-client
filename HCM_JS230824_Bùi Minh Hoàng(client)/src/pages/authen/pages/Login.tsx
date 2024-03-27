import React from 'react'

export default function Login({containerRef}: {
    containerRef:any
}) {
  return (
    <div className="form-container sign-in-container">
    <form action="#">
      <h1>Sign in</h1>
      <div className="social-container">
        <a href="#" className="social">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#" className="social">
          <i className="fab fa-google-plus-g" />
        </a>
        <a href="#" className="social">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
      <span>or use your account</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <button  onClick={()=>{
        containerRef.current.classList.add("right-panel-active")
      }}>Sign In</button>
    </form>
  </div>
  )
}
