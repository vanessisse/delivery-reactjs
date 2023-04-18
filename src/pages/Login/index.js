import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    senha: ''
  })

  const { loginUser } = useContext(AuthContext);
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
    loginUser(inputValues);
    navigate('/');
  }

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
          <img className="w-40 mt-5" src={logo} alt="logo Talent Food" />
          <div className="grid grid-cols-1 w-1/5">
            <div className='flex flex-col mt-5 mb-5'>
              <label htmlFor='email' className='text-primary text-md font-bold mb-2'>E-mail:</label>
              <input type='mail' placeholder="Digite seu e-mail" name="email" className='border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl' onChange={handleChangeValues} />
            </div>
            <div className='flex flex-col mb-5'>
              <label htmlFor='senha' className='text-primary text-md font-bold mb-2'>Senha:</label>
              <input type='password' placeholder="Digite sua senha" name="senha" className='border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl' onChange={handleChangeValues}/>
            </div>
          </div>
          <button type='submit' className='text-xs uppercase bg-primary px-4 py-2 font-bold text-secondary rounded-lg transition duration-700 hover:scale-105'>Entrar</button>
          <p className="text-base text-primary text-center my-5 hover:underline cursor-pointer">Crie uma conta!</p>
        </form>
      </div>
    </main>
  )
}

export default Login