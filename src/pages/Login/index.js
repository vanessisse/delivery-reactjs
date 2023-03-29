import { useNavigate } from "react-router-dom";
import React from 'react'

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/', { state: 'Minnie' });
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
      <div className="grid grid-cols-1 w-1/5">
        <div className='flex flex-col mt-5 mb-5'>
          <label htmlFor='nome' className='text-primary text-md font-bold'>E-mail:</label>
          <input type='text' id='nome' className='border custom-border-color p-2 rounded-full' />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='email' className='text-primary text-md font-bold'>Senha:</label>
          <input type='email' id='email' className='border custom-border-color p-2 rounded-full' />
        </div>
      </div>
      <button type='submit' className='bg-primary px-6 py-1 font-bold text-secondary rounded-full transition duration-700 hover:scale-105'>Entrar</button>
    </form>
  )
}

export default Login