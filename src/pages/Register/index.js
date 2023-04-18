import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import { registerUser } from '../../services/authService';

const Register = () => {
  const [inputValues, setInputValues] = useState({
    nome: '',
    email: '',
    senha: '',
    imagem: ''
  })

  const navigate = useNavigate();

  const handleChangeValues = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
    console.log(inputValues);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await registerUser(inputValues);
    if (response.data) {
      alert(`${response.data.nome} cadastrado com sucesso!`)
      navigate('/login')
    }
  }

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
          <img className="w-40 mt-5" src={logo} alt="logo Talent Food" />
          <h1 className='text-2x1 text-primary mt-5 font-bold'>Cadastro de usuário</h1>
          <div className="grid grid-cols-1 w-2/5">
            <div className='flex flex-col mt-5 mb-5'>
              <label htmlFor='nome' className='text-primary text-md font-bold mb-2'>Nome:</label>
              <input type='text' name='nome' placeholder='Digite seu nome' className='border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl' onChange={handleChangeValues} />
            </div>
            <div className='flex flex-col mb-5'>
              <label htmlFor='email' className='text-primary text-md font-bold mb-2'>E-mail:</label>
              <input type='email' name='email' placeholder='Digite seu e-mail' className='border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl' onChange={handleChangeValues} />
            </div>
            <div className='flex flex-col mb-5'>
              <label htmlFor='senha' className='text-primary text-md font-bold mb-2'>Senha:</label>
              <input type='password' name='senha' placeholder='Digite sua senha' className='border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl' onChange={handleChangeValues} />
            </div>
            <div className='flex flex-col mb-5'>
              <label htmlFor='imagem' className='text-primary text-md font-bold mb-2'>Imagem:</label>
              <input type='text' name='imagem' placeholder='Insira a URL da imagem' className='border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl' onChange={handleChangeValues} />
            </div>
          </div>
          <button type='submit' className='text-xs uppercase bg-primary px-4 py-2 font-bold text-secondary rounded-lg transition duration-700 hover:scale-105 mb-10'>Cadastrar</button>
        </form>
      </div>
    </main>
  )
}

export default Register