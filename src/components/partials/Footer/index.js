import React from 'react';
import { FooterArea, FooterParceiros } from './styled';

const Footer = () => {
    return (
        <>
            <FooterArea>
                Desenvolvido por Kelvyn Telles, todos os direitos reservados.
            </FooterArea>
            <FooterParceiros>
                <img src='/assets/uv.svg' />
                <img src='/assets/dms.png' />
            </FooterParceiros>
        </>
    );
}

export default Footer;