import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { findProductById } from "../../services/productService";
import { useNavigate } from 'react-router-dom';

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getProductById();
  }, [])

  const getProductById = async () => {
    const response = await findProductById(id);
    setProduct(response.data);
  }

  const addToCart = () => {
    const productCart = [
      {
        ...product,
        quantity: quantity,
      }
    ]
    const storageCart = JSON.parse(localStorage.getItem('productCart'));
    if (storageCart) {
      productCart.push(
        ...storageCart
      )
      localStorage.setItem('productCart', JSON.stringify(productCart));
    }
    localStorage.setItem('productCart', JSON.stringify(productCart));

    navigate('/cart')
  }

  return (
    <main className="max-w-screen-xl mx-auto px-6">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="order-2 md:order-1 lg:order-1 flex flex-col item justify-center">
            <h1 className="text-center md:text-left lg:text-left text-2xl lg:text-2xl font-semibold pb-4 text-primary select-none">
              {product.nome}
            </h1>
            <p className="text-center md:text-left lg:text-left text-sm text-black leading-relaxed select-none">
              {product.descricao}
            </p>
            <div className="flex items-center justify-center md:justify-start lg:justify-start space-x-6 pt-5">
              <h2 className="text-2xl font-bold text-black poppins select-none">
                R${product.precoUnitario}
              </h2>
              <div className="flex items-center border border-gray-200 px-4 py-2 space-x-1 rounded-lg">
                <AiOutlineMinusSquare
                  onClick={() => {
                    quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1)
                  }}
                  className="text-2xl w-8 h-8 rounded-full text-secondary hover:scale-105 transform transition duration-500 cursor-pointer p-1" />
                <span className="text-lg text-black select-none">{quantity}</span>
                <AiOutlinePlusSquare
                  onClick={() => {
                    setQuantity(quantity + 1)
                  }}
                  className="text-2xl w-8 h-8 rounded-full text-secondary hover:scale-105 transform transition duration-500 cursor-pointer p-1" />
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start lg:justify-start">
              <button onClick={addToCart} className="flex items-center space-x-3 text-xs uppercase bg-primary px-4 py-2 font-bold text-secondary rounded-lg transition duration-700 hover:scale-105">
                <FaShoppingCart className="text-xl" />
                <span>ADICIONAR</span>
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 lg:order-2">
            <img src={product.imagem} alt="" className="w-3/4 md:w-3/4 lg:w-3/4 mx-auto" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductInfo;