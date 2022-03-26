import styled from 'styled-components';

export const Container = styled.div`

    .titulo {
        font-size: 20px;
        color: black;
        font-style: normal;
        padding-left: 5px;
        border-left: solid;
        border-left-color: #8B0000;
        margin-bottom: 5px;
    }

    .sub-titulo {
        margin-bottom: 8px;
        background-color: #8B0000;
        color: #FFFAFA;
        padding-left: 5px;
        border-radius: 5px;
        padding-bottom: 3px;
        padding-top: 3px;
        width: 240px;
    }

    table {
        width: 300px;
        height: 200px;
        padding-left: 5px;
        padding-right: 5px;
        font-size: 20px;
        margin-bottom: 30px;

        .titulo-tabela {
            text-align: right;
            border-bottom-style: solid;
            font-size: 16px;
            color: #696969;
        }

        .texto-direita {
            text-align: right;
            color: #696969;
        }

        .texto-chamativo {
            
        }
    }
`;
