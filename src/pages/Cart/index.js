import React, { useState } from 'react'
import { useEffect } from 'react';
import { FiDelete } from 'react-icons/fi';
import axios from 'axios';
import { sendCart, addOrder } from '../../services/orderService';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [productsCart, setProductsCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [address, setAddress] = useState({
    rua: '',
    numero: '',
    complemento: '',
    cep: ''
  })

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem('productCart'));
    setProductsCart(storageCart);
    const total = storageCart.reduce((valor, product) => {
      return valor + product.precoUnitario;
    }, 0)
    setTotalValue(total);
  }, [])

  const remove = (id) => {
    const storageCart = JSON.parse(localStorage.getItem('productCart'));
    const filterCart = storageCart.filter((product) => product._id !== id);
    localStorage.setItem('productCart', JSON.stringify(filterCart));
    setProductsCart(filterCart);
    setAddress({
      rua: '',
      numero: '',
      complemento: '',
      cep: ''
    });
    setTotalValue(0);
  }

  const findAddress = async () => {
    const response = await axios.get(`https://viacep.com.br/ws/${address.cep}/json`)
    setAddress({
      ...address,
      rua: `${response.data.logradouro}, ${response.data.bairro}, ${response.data.localidade}`
    })
  }

  const sendOrder = async () => {
    const productsOrder = productsCart.map((product) => {
      return {
        _id: product._id,
        quantidade: product.quantity
      }
    })
    const cartInfo = {
      produtos: productsOrder,
      precoTotal: totalValue,
      frete: 5
    }

    const response = await sendCart(cartInfo);
    if (response.data) {
      const order = {
        produtos: response.data.produtos,
        precoTotal: response.data.precoTotal,
        frete: response.data.frete,
        concluido: true,
      }
      const responseOrder = await addOrder(order)
      if (responseOrder.data) {
        localStorage.removeItem('productCart');
        navigate('/complete')
      }
    }
  }

  const handleChangeValues = (evento) => {
    setAddress({
      ...address,
      [evento.target.name]: evento.target.value
    })
  }

  return (
    <main>
      <div className="max-w-screen-xl py-10 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="col-span-1">
            <div className="flex flex-col mt-5">
              <h2 className="text-center md:text-left lg:text-left text-2xl lg:text-2xl font-semibold pb-2 text-primary select-none border-b border-gray-500">
                Endereço de entrega
              </h2>
              <form className="my-4">
                <div className="flex flex-col space-y-2.5">
                  <label htmlFor="codigoBarra" className="text-primary text-md font-bold">
                    CEP:
                  </label>
                  <input type="text" name="cep" placeholder='00000-000' id="cep"
                    value={address.cep}
                    onChange={handleChangeValues}
                    className="border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl"
                  />
                  <label htmlFor="codigoBarra" className="text-primary text-md font-bold">
                    Rua:
                  </label>
                  <input type="text" name="rua" placeholder='Nome da rua' id="rua"
                    value={address.rua}
                    onFocus={findAddress}
                    onChange={handleChangeValues}
                    className="border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl"
                  />
                  <label htmlFor="codigoBarra" className="text-primary text-md font-bold">
                    Número:
                  </label>
                  <input type="text" name="numero" placeholder='Número da residência' id="numero"
                    value={address.numero}
                    onChange={handleChangeValues}
                    className="border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl"
                  />
                  <label htmlFor="codigoBarra" className="text-primary text-md font-bold">
                    Complemento:
                  </label>
                  <input type="text" name="complemento" placeholder='Opcional' id="complemento"
                    value={address.complemento}
                    onChange={handleChangeValues}
                    className="border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className='col-span-1'>
            <div className="glass py-10 box-border rounded-lg">
              <div className=" flex flex-col space-y-5">
                {productsCart.map((product) => (
                  <div key={product._id} className="rounded-lg p-4 flex space-x-4">
                    <div className="flex">
                      <img className="w-24 object-contain" src={product.imagem} alt={product.nome} />
                    </div>
                    <div className="flex flex-col space-y-3 flex-grow">
                      <h5 className="text-primary text-md font-semibold">{product.nome}</h5>
                      <h3 className="font-semibold text-lg text-black poppins">R${product.precoUnitario}</h3>
                    </div>
                    <div className="flex items-center px-4 py-2 space-x-2.5">
                      <span className='text-lg text-gray-500 select-none'>
                        {product.quantity}un
                      </span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <FiDelete onClick={() => remove(product._id)} className="cursor-pointer text-2xl text-red-600" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col space-y-4 my-4">
                <div className="flex items-center">
                  <span className="flex-grow text-primary text-md font-semibold">
                    Total
                  </span>
                  <span className="poppins text-md font-semibold text-black">
                    R${totalValue}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="flex-grow text-primary text-md font-semibold">
                    Taxa de entrega
                  </span>
                  <span className="poppins text-md font-semibold text-black">
                    5
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="flex-grow text-primary text-xl font-semibold">
                    Total + taxa
                  </span>
                  <span className="poppins font-semibold text-black text-xl">
                    R${totalValue + 5}
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="poppins text-primary text-md font-semibold">Endereço de entrega:</p>
                  <span className="text-md text-black">
                    {address.rua}, n° {address.numero} - {address.complemento}
                  </span>
                </div>
                <div className='flex items-center justify-center'>
                  <button onClick={sendOrder} className="text-xs uppercase bg-primary px-4 py-2 font-bold text-secondary rounded-lg transition duration-700 hover:scale-105 mt-2">
                    Enviar Pedido
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cart