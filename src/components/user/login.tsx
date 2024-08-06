import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser } from './register'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const Login = () => {
  const {register,handleSubmit,formState:{errors}} = useForm<IUser>()
  const navigate = useNavigate()
  const onSubmit = async(registerdata:IUser)=>{
      try {
          const {data} = await axios.post('http://localhost:3000/login',registerdata)
          alert('Đăng nhập thành công')
          sessionStorage.setItem('user',JSON.stringify(data))
          navigate('/dashboard')
      } catch (error) {
          alert('Sai tên đăng nhập hoặc mật khẩu')
      }
  }
  return (
    <>
    <div className='left-0 w-full h-full' onSubmit={handleSubmit(onSubmit)}>
    <div id='register' className='box-user border border-solid p6'>
        <h3 className='text-[24px] text-center pb-4'>Đăng nhập tài khoản</h3>
        <form className='flex flex-col gap-3'>
            <input type='text' className='border border-solid p-2' placeholder='email'  {...register('email',{required:true,pattern:/^\S+@(\S+\.)+\S{2,6}$/})}/>
            {(errors.email) && <span>Sai định dạng email</span>}
            <input type='password' className='border border-solid p-2' placeholder='password' {...register('password',{required:true,minLength:6})}/>
            {(errors.password) && <span>Mật khẩu lớn hơn 6 kí tự</span>}
            <div className='flex gap-2 justify-between'>
            <button type='submit' className='border border-solid p-2'>Đăng ký</button>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Login