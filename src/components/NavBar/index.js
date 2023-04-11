import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi'

const NavBar = () => {
    const { userLogged, userFull, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <header className='bg-clean z-50 w-full'>
            <nav className='flex items-center max-w-screen-xl mx-auto px-6 py-3'>
                <div className='flex flex-grow items-center'>
                    <Link to='/'>
                        <img src={logo} alt='logo' className='w-10 cursor-pointer' />
                    </Link>
                    <h1 className='text-center text-3x1 font-bold text-primary p-1'>Talent Food</h1>
                </div>
                {userLogged ? (
                    <div className='flex items-center justify-end space-x-6'>
                        <div className='relative flex cursor-pointer'>
                            <span className='bg-secondary w-4 h-4 p-1 rounded-full flex items-center justify-center text-white absolute -right-2 -top-2'>2</span>
                            <FaShoppingCart className='text-primary w-6 h-6 cursor-pointer' />
                        </div>
                        <p className='text-gray-700'>Bem-vindo(a), {userFull?.nome}!</p>
                        <img src={userFull?.imagem} className='w-10 h-10 rounded-full' alt='imagem do usuário' />
                        <HiOutlineLogout className='text-primary w-6 h-6 cursor-pointer' onClick={logoutUser} />
                    </div>
                ) : (
                    <div className='flex items-center justify-end space-x-6'>
                        <button onClick={() => navigate('/login')} className='text-primary font-bold'>Login</button>
                        <button onClick={() => navigate('/register')} className='bg-primary px-6 py-1 font-bold text-secondary rounded-full transition duration-700 hover:scale-105'>Cadastro</button>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default NavBar