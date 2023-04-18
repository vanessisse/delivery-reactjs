import React, { useEffect, useState } from "react";
import { FiEdit } from 'react-icons/fi'
import { FiDelete } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { findAllProducts, deleteProduct } from "../../services/productService";

const Admin = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
  }, [])

  const getAllProducts = async () => {
    const response = await findAllProducts();
    setProducts(response.data);
  }

  const removeProduct = async (id) => {
    const answer = window.confirm('Deseja excluir o produto?')
    if (answer) {
      await deleteProduct(id);
      getAllProducts();
    }
  }

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-6">
      <div className="flex space-y-2 items-center justify-center">
        <button onClick={() => navigate('/admin/add-product')} className="text-xs uppercase bg-primary px-4 py-2 font-bold text-secondary rounded-lg transition duration-700 hover:scale-105">
          Adicionar Produto
        </button>
      </div>
      <div className="flex flex-col my-8">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden sm:rounded-lg shadow-md">
              <table className="min-w-full">
                <thead className="bg-primary">
                  <tr>
                    <th
                      scope="col"
                      className="text-xs font-bold text-white px-6 py-3 text-left uppercase tracking-wider"
                    >
                      Imagem
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-bold text-white px-6 py-3 text-left uppercase tracking-wider"
                    >
                      Nome
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-bold text-white px-6 py-3 text-left uppercase tracking-wider"
                    >
                      Preço
                    </th>
                    <th
                      scope="col"
                      className="text-xs font-bold text-white px-6 py-3 text-left uppercase tracking-wider"
                    >
                      Código de Barras
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="text-xs font-bold text-white px-6 py-3 text-left uppercase tracking-wider">Ações</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product._id} className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <img className="w-16" src={product.imagem} alt={product.nome} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {product.nome}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {product.precoUnitario}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {product.codigoBarra}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap flex flex-col h-24 items-center justify-center">
                        <div className="flex items-center justify-center space-x-3">
                          <Link to={`/admin/edit-product/${product._id}`}>
                            <FiEdit className="cursor-pointer text-2xl text-gray-400" />
                          </Link>
                          <FiDelete onClick={() => removeProduct(product._id)} className="cursor-pointer text-2xl text-red-600" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;