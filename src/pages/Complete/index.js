import React from 'react'
import complete from '../../assets/complete.png';
import { useNavigate } from 'react-router-dom';

const Complete = () => {
  const navigate = useNavigate();

  return (
    <main className=" h-screen">
      <div className="max-w-screen-xl py-10 mx-auto px-6">
        <div className="flex flex-col items-center justify-center h-3/4 pt-10">
          <h1 className="text-3xl text-center text-primary font-semibold poppins flex space-x-6 items-center ">
            Pedido realizado!
          </h1>
          <img src={complete} className="w-60 object-contain" alt="Imagem representando sucesso no pedido"/>
          <button onClick={() => navigate('/')} className="text-xs uppercase bg-primary px-4 py-2 font-bold text-secondary rounded-lg transition duration-700 hover:scale-105 mt-2">Voltar para home</button>
        </div>
      </div>
    </main>
  )
}

export default Complete