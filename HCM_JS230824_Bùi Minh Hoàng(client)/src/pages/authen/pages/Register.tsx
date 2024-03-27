import apis from '@/apis'
import { CreateUser } from '@/apis/modules/user.api';
import { Modal } from 'antd';
import React from 'react'

export default function Register({containerRef}:{
    containerRef:any
}) {
function handleRegister(e:React.FormEvent){
e.preventDefault();
let data: CreateUser ={
    userName: (e.target as any).userName.value,
    email: (e.target as any).email.value,
    password: (e.target as any).password.value
}
apis.user.register(data)
.then(res =>{
Modal.success({
    title:"Thông báo",
    content:res.data.message,
    onOk: () =>{
        containerRef.current.classList.remove("right-panel-active")
    }
})
}
)
.catch(
    err =>{
        console.log("err",err)
Modal.error({
    title:"Thông báo",
    content: err?.response?.data?.message.join(',') || "Lỗi không xác định"
})
    }
)
}
 return (
    <div className="form-container sign-up-container">
    <form onSubmit ={(e)=>{
        handleRegister(e)
    }}>
      <h1>Create Account</h1>
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
      <span>or use your email for registration</span>
      <input type="text" placeholder="UserName" name='userName'/>
      <input type="text" placeholder="Email" name='email' />
      <input type="password" placeholder="Password" name='password' />
      <button >Sign Up</button>
    </form>
  </div>
  )
}
