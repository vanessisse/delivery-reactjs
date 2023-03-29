import React from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/', { state: 'Minnie' });
  }

  return (
<form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
  <div className="grid grid-cols-1 w-2/5">
    <div className='flex flex-col mt-5 mb-5'>
      <label htmlFor='nome' className='text-primary text-md font-bold'>Nome:</label>
      <input type='text' id='nome' className='border custom-border-color p-2 rounded-full' />
    </div>
    <div className='flex flex-col mb-5'>
      <label htmlFor='email' className='text-primary text-md font-bold'>E-mail:</label>
      <input type='email' id='email' className='border custom-border-color p-2 rounded-full' />
    </div>
    <div className='flex flex-col mb-5'>
      <label htmlFor='senha' className='text-primary text-md font-bold'>Senha:</label>
      <input type='password' id='senha' className='border custom-border-color p-2 rounded-full' />
    </div>
    <div className='flex flex-col mb-5'>
      <label htmlFor='endereco' className='text-primary text-md font-bold'>Endereço:</label>
      <input type='text' id='endereco' className='border custom-border-color p-2 rounded-full' />
    </div>
    <div className='flex flex-col mb-5'>
      <label htmlFor='cidade_estado' className='text-primary text-md font-bold'>Cidade/Estado:</label>
      <input type='text' id='cidade_estado' className='border custom-border-color p-2 rounded-full' />
    </div>
    <div className='flex flex-col mb-5'>
      <label htmlFor='cep' className='text-primary text-md font-bold'>CEP:</label>
      <input type='text' id='cep' className='border custom-border-color p-2 rounded-full' />
    </div>
  </div>
  <button type='submit' className='bg-primary px-6 py-1 font-bold text-secondary rounded-full transition duration-700 hover:scale-105 mb-10'>Cadastrar</button>
</form>

  )
}

export default Register