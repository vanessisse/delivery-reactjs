import React, { useState } from 'react'
import Product from '../Product'

const ProductList = () => {
    const [categoriaTab, setCategoriaTab] = useState('Hambúrgueres');

    return (
        <section className='my-12 max-w-screen-xl mx-auto px-3'>
            <div className='flex items-center justify-center space-x-14'>
                <p className={categoriaTab === 'Hambúrgueres' ? 'active-menu-tab bg-secondary text-primary' : 'menu-tab bg-primary text-secondary'} onClick={() => setCategoriaTab('Hambúrgueres')}>Hambúrgueres</p>
                <p className={categoriaTab === 'Pizzas' ? 'active-menu-tab bg-secondary text-primary' : 'menu-tab bg-primary text-secondary'} onClick={() => setCategoriaTab('Pizzas')}>Pizzas</p>
                <p className={categoriaTab === 'Saladas' ? 'active-menu-tab bg-secondary text-primary' : 'menu-tab bg-primary text-secondary'} onClick={() => setCategoriaTab('Saladas')}>Saladas</p>
                <p className={categoriaTab === 'Sobremesas' ? 'active-menu-tab bg-secondary text-primary' : 'menu-tab bg-primary text-secondary'} onClick={() => setCategoriaTab('Sobremesas')}>Sobremesas</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12'>
                <Product />
                <Product />
            </div>
        </section >
    )
}

export default ProductList