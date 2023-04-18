import React, { useEffect, useState } from "react";
import { findAllCategories } from '../../services/categoryService';
import { MultiSelect } from "react-multi-select-component";
import { addProductAPI } from "../../services/productService";
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [productForm, setProductForm] = useState({
    nome: "",
    descricao: "",
    precoUnitario: 0,
    imagem: "",
    codigoBarra: 0,
    categorias: [{ _id: "" }],
  })
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, [])

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
    const categoriesId = selected.map(category => {
      return {
        _id: category.value
      }
    })
    const product = {
      ...productForm,
      categorias: categoriesId,
      precoUnitario: parseInt(productForm.precoUnitario),
      codigoBarra: parseInt(productForm.codigoBarra)
    }

    const response = await addProductAPI(product);

    console.log(response);
    if (response.data) {
      alert(`Produto ${response.data.nome} cadastrado com sucesso !`)
      navigate('/admin')
    }

  }

  return (
    <section className="my-8 max-w-screen-xl mx-auto px-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-primary text-md font-bold">Cadastro de produtos</h1>
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
            placeholder="Digite o nome do produto"
            required
            onChange={handleChangeValues}
            className='border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl"'
          />

          <label htmlFor="descricao" className="text-primary text-md font-bold mb-2">
            Descrição:
          </label>
          <textarea
            name="descricao"
            id="descricao"
            cols="30"
            rows="2"
            placeholder="Digite a descrição do produto"
            onChange={handleChangeValues}
            className="border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl"
            required
          ></textarea>

          <label htmlFor="codigoBarra" className="text-primary text-md font-bold mb-2">
            Código de barras:
          </label>
          <input
            type="text"
            id="codigoBarra"
            name="codigoBarra"
            onChange={handleChangeValues}
            required
            className='border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl"'
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
            placeholder="R$00,00"
            onChange={handleChangeValues}
            required
            className='border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl"'
          />
          <label htmlFor="imagem" className="text-primary text-md font-bold mb-2">
            Imagem:
          </label>
          <input
            type="text"
            id="imagem"
            onChange={handleChangeValues}
            name="imagem"
            placeholder="Insira a URL da imagem do produto"
            required
            className='border custom-border-color p-2 rounded-lg focus:ring-1 focus:outline-none transition duration-300 focus:shadow-xl"'
          />

          <label htmlFor="title" className="text-primary text-md font-bold mb-2">
            Categoria:
          </label>
          <MultiSelect
            options={categories}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
          <div className="mt-8">
            <button className="text-xs uppercase bg-primary px-4 py-2 font-bold text-secondary rounded-lg transition duration-700 hover:scale-105 mt-2">Adicionar</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;