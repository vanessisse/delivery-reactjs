import { Link } from 'react-router-dom';
import React from 'react'
import logo from '../../assets/logo.png'

const NavBar = () => {
    return (
        <header className='bg-clean z-50 w-full'>
            <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
                <div className='flex flex-grow items-center'>
                    <Link to='/'>
                        <img src={logo} alt='logo' className='w-10 cursor-pointer' />
                    </Link>
                    <h1 className='text-center text-3x1 font-bold text-primary p-1'>Talent Food</h1>
                </div>
                <div className='flex items-center justify-end space-x-6'>
                    <Link to='/login' className='text-primary font-bold'>Login</Link>
                    <Link to='/register' className='bg-primary px-6 py-1 font-bold text-secondary rounded-full transition duration-700 hover:scale-105'>Cadastro</Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar