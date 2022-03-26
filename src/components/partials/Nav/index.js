import React from 'react';
import { Container } from './styled';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <Container>
            <Link to="/" className='link'>
                Home
            </Link>
            <Link to="/cadastro" className='link'>
                Cadastro
            </Link>
        </Container>
    );
}

export default Nav;