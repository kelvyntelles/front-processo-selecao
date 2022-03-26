import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 180px;

    .formulario {
        background-color: #DCDCDC;
        color: #808080;
        display: flex;
        flex-direction: column;
        width: 600px;
        height: auto;
        padding: 10px;
        padding-bottom: 30px;
        border-radius: 5px;
        margin-right: 40px;

        .titulo-form {
            text-align: center;
            font-size: 30px;
            padding-bottom: 5px;
        }

        label {
            font-size: 16px;
            padding-top: 15px;
        }

        input {
            height: 25px;
            border: none;
            border-radius: 5px;
            outline: none;
        }

        .botao {
            color: #FFFAFA;
            background-color: #8B0000;
            padding: 10px;
            height: auto;
            font-size: 20px;
            margin-top: 15px;
        }
    }
`;