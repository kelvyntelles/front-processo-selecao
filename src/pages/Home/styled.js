import styled from 'styled-components';

export const Container = styled.div`

    .conteudo-cima {
        display: flex;
    }

    .lado-esquerdo {
        width: 50%;
        height: 500px;
        background-color: #1C1C1C;
        border: #696969;
        border-style: solid;
    }
    .lado-direito {
        width: 50%;
        height: 500px;
        background-color: #1C1C1C;
        border: #696969;
        border-style: solid;
    }

    .imagem {
        height: 450px;
        width: 100%;
    }

    .texto-imagem{
        display: flex;
        justify-content: center;
        color: #FFFAFA;
        font-size: 18px;
        background-color: #1C1C1C;
        text-decoration: none;
        cursor: pointer;
    }

    .conteudo-baixo {
        margin: 70px;
        display: grid;
        grid-template-columns: 4fr 4fr 4fr;
        padding-left: 200px;
    }
`;
