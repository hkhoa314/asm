import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export interface IUser {
    id?:number|string;
    name?:string;
    email:string;
    password:string
}
const Register = () => {
  const {register,handleSubmit,formState:{errors}} = useForm<IUser>()
  const navigate = useNavigate()
  const onSubmit = async(registerdata:IUser)=>{
      try {
          const {data} = await axios.post('http://localhost:3000/register',registerdata)
          alert('Đăng ký thành công')
          navigate('/login')
      } catch (error) {
          alert('Lỗi đăng ký')
      }
  }
  return (
    <>
    {/* <h1>Đăng ký tài khoản</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Họ tên' {...register('name')}/>
      <input type='text' placeholder='Email' {...register('email',{required:true,pattern:/^\S+@(\S+\.)+\S{2,6}$/})}/>
      {(errors.email) && <span>Sai định dạng email</span>}
      <input type='text' placeholder='Mật khẩu' {...register('password',{required:true,minLength:6})}/>
      {(errors.password) && <span>Mật khẩu lớn hơn 6 kí tự</span>}
      <button type='submit'>Thêm mới</button>
    </form> */}
    <div className='left-0 w-full h-full' onSubmit={handleSubmit(onSubmit)}>
    <div id='register' className='box-user border border-solid p6'>
        <h3 className='text-[24px] text-center pb-4'>Đăng ký tài khoản</h3>
        <form className='flex flex-col gap-3'>
            <input type='text' className='border border-solid p-2' placeholder='Họ tên' {...register('name')}/>
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

export default Register