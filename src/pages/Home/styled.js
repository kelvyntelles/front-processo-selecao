import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    .lado-esquerdo {
        width: 50%;
        height: 500px;
        background-color: #1C1C1C;
        border: #FFFAFA;
        border-style: solid;
    }
    .lado-direito {
        width: 50%;
        height: 500px;
        background-color: #1C1C1C;
        border: #FFFAFA;
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
`;
