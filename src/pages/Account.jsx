import React, { useEffect, useState } from 'react'
import { machine_washingclosed } from "../assets/Images"
import { IoEyeOffOutline, IoEyeOutline, IoKeyOutline, IoPersonCircleOutline, IoPersonOutline } from 'react-icons/io5'
import { BsPersonSquare } from 'react-icons/bs'
import { TbMailForward } from 'react-icons/tb'
import { RiLockPasswordFill } from 'react-icons/ri'
import { MdLockOpen } from 'react-icons/md'

export default function Account() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [showLogin,setShowLogin] = useState(true);

  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    confPassword: "",
  })

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name] : e.target.value}))
  }

  return (
    <main className="flex flex-col relative py-20 px-4">
      <img src={machine_washingclosed} alt="machine washingclosed" className="absolute top-0 left-0 h-full w-full md:w-1/2 object-cover object-center" />
      <div className="container mx-auto flex relative justify-center md:justify-end">
        {
          showLogin ?
          <form action="" className="bg-white p-4 shad md:shadow-none flex flex-col rounded-md gap-4 w-full max-w-md">
          <h3 data-aos="zoom-in-down" data-aos-delay="100" className="text-primary text-xl md:text-3xl text-center font-bold">Get Exclusive Access</h3>
          <div data-aos="fade-up" data-aos-delay="1500" className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2">
            <IoPersonOutline />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder='Email@mail.com' className="flex-1 p-1 outline-none" />
          </div>
          <div data-aos="fade-down" data-aos-delay="1000" className="flex items-center gap-1  border-dark/20 text-dark/50 p-2">
            <IoKeyOutline />
            <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} required placeholder='******' minLength={6} className="flex-1 p-1 outline-none" />
            <span onClick={() => setShowPassword(!showPassword)} className="relative cursor-pointer p-1">
              {
                showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />
              }
            </span>
          </div>
          <button data-aos="flip-right" data-aos-delay="2000" type='submit' className="py-1 md:py-1.5 px-6 md:px-8 bg-secondary text-white border border-secondary hover:bg-white hover:text-secondary rounded-md w-max"> Login </button>
          <p onClick={() => setShowLogin(!showLogin)} className="cursor-pointer p-1 text-center text-dark/60 underliner">Don&apos;t haave an account yet? Signup</p>
        </form>
        :
        <form action="" className="bg-white p-4 shad md:shadow-none flex flex-col rounded-md gap-4 w-full max-w-md">
          <h3 data-aos="zoom-in-down" data-aos-delay="100" className="text-primary text-xl md:text-3xl text-center font-bold">Enjoy <span className="text-secondary">Incredible Offers</span> when you Sign up</h3>
          <div data-aos="fade-up" data-aos-delay="1500" className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2">
            <IoPersonCircleOutline />
            <input type="text" value={inputs.firstname} name='firstname' onChange={handleChange} required placeholder='First Name e.g kvchi' className="flex-1 p-1 outline-none" />
          </div>
          <div data-aos="fade-up" data-aos-delay="1500" className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2">
            <BsPersonSquare />
            <input type="text" value={inputs.lastname} name='lastname' onChange={handleChange} required placeholder='Last Name e.g Kvne' className="flex-1 p-1 outline-none" />
          </div>
          <div data-aos="fade-up" data-aos-delay="1500" className="flex items-center gap-1 border-b border-dark/20 text-dark/50 p-2">
            <TbMailForward />
            <input type="email" value={inputs.email} name='email' onChange={handleChange} required placeholder='Kvchikvne@mail.com' className="flex-1 p-1 outline-none" />
          </div>
          <div data-aos="fade-down" data-aos-delay="1000" className="flex items-center gap-1  border-dark/20 text-dark/50 p-2">
            <RiLockPasswordFill />
            <input type={showPassword ? "text" : "password"} value={inputs.password} name='password' onChange={handleChange} required placeholder='******' minLength={6} className="flex-1 p-1 outline-none" />
            <span onClick={() => setShowPassword(!showPassword)} className="relative cursor-pointer p-1">
              {
                showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />
              }
            </span>
          </div>
          <div data-aos="fade-down" data-aos-delay="1000" className="flex items-center gap-1  border-dark/20 text-dark/50 p-2">
            <MdLockOpen />
            <input type={showPassword ? "text" : "password"} value={inputs.confPassword} name='confPassword' onChange={handleChange} required placeholder='******' minLength={6} className="flex-1 p-1 outline-none" />
            <span onClick={() => setShowPassword(!showPassword)} className="relative cursor-pointer p-1">
              {
                showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />
              }
            </span>
          </div>
          <button data-aos="flip-right" data-aos-delay="2000" type='submit' className="py-1 md:py-1.5 px-6 md:px-8 bg-secondary text-white border border-secondary hover:bg-white hover:text-secondary rounded-md w-max"> Create Account </button>
          <p onClick={() => setShowLogin(!showLogin)} className="cursor-pointer p-1 text-center text-dark/60 underliner">Already a Member? Login</p>
        </form>
        }
      </div>
    </main>
  )
}
