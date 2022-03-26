import React from 'react';
import { Container } from './styled';

const TabelaCampeonato = () => {
    return (
        <Container>
            <div className='titulo'>
                CLASSIFICAÇÃO
            </div>
            <div className='sub-titulo'>
                CAMPEONATO CARIOCA 2022
            </div>
            <table>
                <tr className='titulo-tabela'>
                    <th></th>
                    <th>P</th>
                    <th>J</th>
                    <th>G</th>
                </tr>
                <tr>
                    <td><strong>Fla</strong></td>
                    <td className='texto-direita'>27</td>
                    <td className='texto-direita'>11</td>
                    <td className='texto-direita'>19</td>
                </tr>
                <tr>
                    <td><strong>Flu</strong></td>
                    <td className='texto-direita'>25</td>
                    <td className='texto-direita'>11</td>
                    <td className='texto-direita'>14</td>
                </tr>
                <tr>
                    <td><strong>Bot</strong></td>
                    <td className='texto-direita'>22</td>
                    <td className='texto-direita'>11</td>
                    <td className='texto-direita'>14</td>
                </tr>
                <tr>
                    <td><strong>Vas</strong></td>
                    <td className='texto-direita'>27</td>
                    <td className='texto-direita'>11</td>
                    <td className='texto-direita'>9</td>
                </tr>
            </table>
        </Container>     
    );
}

export default TabelaCampeonato;