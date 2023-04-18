import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { MultiSelect } from "react-multi-select-component";
import { findProductById, updateProductById } from '../../services/productService';
import { findAllCategories } from '../../services/categoryService';
import { useEffect } from 'react';


const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productForm, setProductForm] = useState({
    nome: "",
    descricao: "",
    precoUnitario: 0,
    imagem: "",
    codigoBarra: 0
  })
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    getCategories();
    getProductById();
  }, [])

  const getProductById = async() => {
    const response = await findProductById(id);
    setProductForm(response.data);
  }

  const getCategories = async () => {
    const response = await findAllCategories();
    const categoriesSelect = response.data.map((categoria) => {
      return {
        value: categoria._id,
        label: categoria.nome
      }
    })
    setCategories(categoriesSelect);
  }

  const handleChangeValues = (evento) => {
    setProductForm({
      ...productForm,
      [evento.target.name]: evento.target.value
    })
    console.log(productForm);
  }

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    console.log(productForm);
    const response = await updateProductById(id, productForm)

    if(response) {
      alert('Produto alterado com sucesso');
      navigate('/admin')
    }

  }

  return (
    <section className="my-8 max-w-screen-xl mx-auto px-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-primary text-md font-bold">Edição de dados de produtos</h1>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mb-5 mt-5">
        <div className="flex flex-col space-y-2.5">
          <label htmlFor="nome" className="text-primary text-md font-bold">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={productForm.nome}
            required
            onChange={handleChangeValues}
            className='border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl'
          />

          <label htmlFor="descricao" className="text-primary text-md font-bold">
            Descrição:
          </label>
          <textarea
            name="descricao"
            id="descricao"
            cols="30"
            rows="4"
            value={productForm.descricao}
            onChange={handleChangeValues}
            className="border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl"
            required
          ></textarea>

          <label htmlFor="codigoBarra" className="text-primary text-md font-bold">
            Código de barras:
          </label>
          <input
            type="text"
            id="codigoBarra"
            name="codigoBarra"
            value={productForm.codigoBarra}
            onChange={handleChangeValues}
            required
            className='border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl'
          />
        </div>

        <div className="flex flex-col space-y-2.5">
          <label htmlFor="preco" className="text-primary text-md font-bold">
            Preço:
          </label>
          <input
            type="text"
            id="preco"
            name="precoUnitario"
            value={productForm.precoUnitario}
            onChange={handleChangeValues}
            required
            className='border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl'
          />
          <label htmlFor="imagem" className="text-primary text-md font-bold">
            Imagem:
          </label>
          <input
            type="text"
            id="imagem"
            onChange={handleChangeValues}
            name="imagem"
            value={productForm.imagem}
            required
            className='border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl'
          />

          <label htmlFor="title" className="text-primary text-md font-bold">
            Categoria:
          </label>
          <MultiSelect
            options={categories}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
          <div className="mt-8">
            <button type='submit' className="text-xs uppercase bg-primary px-4 py-2 font-bold text-secondary rounded-lg transition duration-700 hover:scale-105 mt-2">Editar</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default EditProduct