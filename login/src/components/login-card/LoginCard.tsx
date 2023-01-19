import React from 'react'

function LoginCard() {
  return (
    <div className=' w-[300px] bg-white flex flex-col justify-center items-center rounded-xl'>
        <div className='p-10'>
            <h1 className='text-center text-2xl font-semibold'>Login</h1>
            <p className=' text-[#8B8895] font-semibold text-xs'>Enter your credentials</p>
        </div>

        <div className='w-[100%] justify-center flex'>
            <input spellCheck={false} placeholder='Username' id='username' className='bg-[#EEE9F7] w-[100%] h-[40px] rounded-lg border-0 outline-none mx-4 px-3 text-sm' type="text" />
            <label htmlFor="username">{}</label>
        </div>

        <div className='w-[100%] justify-center flex my-4'>
            <input spellCheck={false} placeholder='Password' id='password' className='bg-[#EEE9F7] w-[100%] h-[40px] rounded-lg border-0 outline-none mx-4 px-3 text-sm' type="password" />
            <label htmlFor="password">{}</label>
        </div>

        <div className='w-[100%] flex justify-center'>
            <button className='bg-[#703DFE] text-white p-2 mx-4 my-4 w-[100%] text-xs font-medium tracking-widest rounded-lg'>LOGIN</button>
        </div>
        
    </div>
  )
}

//C2E9FF    E7AFFA

export default LoginCard