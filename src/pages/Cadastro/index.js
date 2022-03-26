import React from 'react';
import { Container } from './styled';

const Page = () => {
    return (
        <Container>
            <form className='formulario'>
                <div className='titulo-form'>
                    <strong>Cadastre um campeonato</strong>
                </div>
                <label>
                    <strong>Nome:</strong>
                </label>
                <input type="text" name="nomeCampeonato" />
                <label>
                    <strong>Data inicio:</strong>
                </label>
                <input type="date" name="nomeCampeonato" />
                <label>
                    <strong>Data fim:</strong>
                </label>
                <input type="date" name="nomeCampeonato" />
                <input className='botao' type="submit" value="Cadastrar" />
            </form>

            <form className='formulario'>
                <div className='titulo-form'>
                    <strong>Cadastre um time</strong>
                </div>
                <label>
                    <strong>Nome:</strong>
                </label>
                <input type="text" name="nomeCampeonato" />
                <label>
                    <strong>País:</strong>
                </label>
                <input type="text" name="nomeCampeonato" />
                <label>
                    <strong>Quantidade de jogadores:</strong>
                </label>
                <input type="number" name="nomeCampeonato" />
                <input className='botao' type="submit" value="Cadastrar" />
            </form>
        </Container>
    );
}

export default Page;