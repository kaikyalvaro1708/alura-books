import styled from './styled-componentes';

export const Titulo = styled.h2`
    {
    width: 100%;
    padding: 30px 0;
    background-color: #fff;
    color: ${props => props.cor || '#eb9b00'};
    font-size: 36px;
    text-align:center;
    margin: 0;
}
`
// Props são atributos que podemos adicionar
// Props pode mudar: cores, fontes, tamanhos de fontes etc.

// export const Titulo = styled.h2`
//     {
//     color: ${props => props.cor || '#eb9b00'};
//     font-size: ${props => props.fonteTamanho || '36px'};
//     text-align:${props => props.alinhamento || 'center'};
//     }
// `