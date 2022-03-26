import React from 'react';
import { Container } from './styled';
import { Link } from 'react-router-dom';
import TabelaCampeonato from '../../components/TabelaCampeonato';

const Page = () => {

    return (
        <Container>
            <div className='conteudo-cima'>
                <div className='lado-esquerdo'>
                    <div>
                        <img src='assets/trofeu.png' className='imagem' />   
                    </div>
                    <div>
                        <Link to="/cadastro" className='texto-imagem'>
                            Cadastre um novo campeonato
                        </Link>
                    </div>
                </div>
                <div className='lado-direito'>
                    <div>
                        <img src='assets/torcida.webp' className='imagem' />    
                    </div>
                    <div className='texto-imagem'>
                        <Link to="/cadastro" className='texto-imagem'>
                            Cadastre um novo time
                        </Link>
                    </div>
                </div>
            </div>
            <div className='conteudo-baixo'>
                <TabelaCampeonato />
                <TabelaCampeonato />
                <TabelaCampeonato />
                <TabelaCampeonato />
                <TabelaCampeonato />
            </div>
            
        </Container>
    );
}

export default Page;