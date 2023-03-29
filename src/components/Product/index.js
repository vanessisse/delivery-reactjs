import React from 'react';
import hamburguer from '../../assets/hamburguer.png';
import bolo from '../../assets/bolo.png';
import pizza from '../../assets/pizza.webp';
import salada from '../../assets/salada.png';

const Product = () => {
  return (
    <>
      <div className='bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
        <span className='bg-red-100 border  border-red-500 rounded-full text-primary text-sm px-4 py-1 inline-block mb-4'>Hambúrguer</span>
        <img className='w-64 mx-auto transform transition duration-300 hover:scale-105' src={hamburguer} alt='imagem do produto' />
        <div className='flex flex-col items-center my-3 space-y-2'>
          <h1 className='text-primary text-md font-bold'>Hambúguer Onion</h1>
          <p className='text-gray-500 text-sm text-center'>Salty culpa minim onion rings magna bbq sauce. Qui onion ut nulla non crinkle-cut fries.</p>
          <h2 className='text-gray-900 text-2x1 font-bold'>R$25,00</h2>
          <button className='bg-primary text-secondary px-8 py-2 rounded-full transition transform duration-300 hover:scale-105 font-bold'>ADICIONAR</button>
        </div>
      </div>
      <div className='bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
        <span className='bg-red-100 border  border-red-500 rounded-full text-primary text-sm px-4 py-1 inline-block mb-4'>Sobremesa</span>
        <img className='w-64 mx-auto transform transition duration-300 hover:scale-105' src={bolo} alt='imagem do produto' />
        <div className='flex flex-col items-center my-3 space-y-2'>
          <h1 className='text-primary text-md font-bold'>Bolo de chocolate</h1>
          <p className='text-gray-500 text-sm text-center'>Cheesecake sesame snaps cookie biscuit cake. Ice cream candy caramels.</p>
          <h2 className='text-gray-900 text-2x1 font-bold'>R$15,00</h2>
          <button className='bg-primary text-secondary px-8 py-2 rounded-full transition transform duration-300 hover:scale-105 font-bold'>ADICIONAR</button>
        </div>
      </div>
      <div className='bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
        <span className='bg-red-100 border  border-red-500 rounded-full text-primary text-sm px-4 py-1 inline-block mb-4'>Pizza</span>
        <img className='w-64 mx-auto transform transition duration-300 hover:scale-105' src={pizza} alt='imagem do produto' />
        <div className='flex flex-col items-center my-3 space-y-2'>
          <h1 className='text-primary text-md font-bold'>Pizza Calabresa</h1>
          <p className='text-gray-500 text-sm text-center'>Pizza ipsum dolor amet bbq sauce beef green bell peppers, platter pie pepperoni melted.</p>
          <h2 className='text-gray-900 text-2x1 font-bold'>R$35,00</h2>
          <button className='bg-primary text-secondary px-8 py-2 rounded-full transition transform duration-300 hover:scale-105 font-bold'>ADICIONAR</button>
        </div>
      </div>
      <div className='bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
        <span className='bg-red-100 border  border-red-500 rounded-full text-primary text-sm px-4 py-1 inline-block mb-4'>Salada</span>
        <img className='w-64 mx-auto transform transition duration-300 hover:scale-105' src={salada} alt='imagem do produto' />
        <div className='flex flex-col items-center my-3 space-y-2'>
          <h1 className='text-primary text-md font-bold'>Salada Tropical</h1>
          <p className='text-gray-500 text-sm text-center'>One bowl black bean wraps soup lentils matcha sparkling pomegranate punch.</p>
          <h2 className='text-gray-900 text-2x1 font-bold'>R$12,00</h2>
          <button className='bg-primary text-secondary px-8 py-2 rounded-full transition transform duration-300 hover:scale-105 font-bold'>ADICIONAR</button>
        </div>
      </div>
    </>
  )
}

export default Product