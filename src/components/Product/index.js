import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
        <span className='bg-red-100 border  border-red-500 rounded-full text-primary text-xs px-4 py-1 inline-block mb-4'>Categoria</span>
        <img className='w-64 mx-auto transform transition duration-300 hover:scale-105' src={product.imagem} alt='imagem do produto' />
        <div className='flex flex-col items-center my-3 space-y-2'>
          <h1 className='text-primary text-md font-bold'>{product.nome}</h1>
          <p className='text-gray-500 text-sm text-center'>{product.descricao}</p>
          <h2 className='text-gray-900 text-2x1 font-bold'>{product.precoUnitario}</h2>
          <button onClick={() => navigate(`/product/${product._id}`)} className='text-xs uppercase bg-primary px-4 py-2 font-bold text-secondary rounded-lg transition duration-700 hover:scale-105'>ADICIONAR</button>
        </div>
      </div>
    </>
  )
}

export default Product;
