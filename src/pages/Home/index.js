import React from "react";
import ProductList from "../../components/ProductList";

const Home = () => {
    return (
        <>
            <section className="home-banner w-full">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className='text-white text-center text-5xl md:text-4xl lg:text-5xl font-bold text-shadow shadow-lg' style={{ textShadow: '4px 4px 7px rgba(0, 0, 0, 0.6)' }}>Olá! Seja bem-vindo(a)!</h1>
                    <h2 className="text-white text-center text-5xl md:text-4xl lg:text-5xl font-bold" style={{ textShadow: '4px 4px 7px rgba(0, 0, 0, 0.6)' }}>Faça seu pedido!</h2>
                </div>
            </section>
            <ProductList />
        </>
    )
}

export default Home;