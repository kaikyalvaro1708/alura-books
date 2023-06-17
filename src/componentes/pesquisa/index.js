import './estilo.css'
import { useState } from 'react';
import {livros} from './dadosPesquisa';

function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    return(
        <div class="pesquisaContainer">
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante</h3>
            <input 
                placeholder="Escreva sua próxima leitura"
                onBlur = {evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = livros.filter(livro =>livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}>
            </input>
        {/* Para aparece os livros */}
        {livrosPesquisados.map(livro =>(
            <div>
                <p>{livro.nome}</p>
                <img src={livro.src}></img>
            </div>
        ))}
        </div>
    )
}

export default Pesquisa


// Styled-components


// import './estilo.css'
// import styled from 'styled-components'

// const PesquisaContainer = styled.div`
//     background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);
//     color: #fff;
//     text-align: center;
//     padding: 85px 0;
//     height: 270px;
//     width: 100%;
// `
// const Titulo = styled.h2`
//     color: #fff;
//     font-size: 6px;
//     text-align:center;
//     width: 100%;
// `
// const Subtitulo = styled.h3`
//     font-size: 16px;
//     font0weight: 500;
//     margin-bottom: 40px;
// `

// function pesquisa(){
//     return(
//         <PesquisaContainer>
//             <Titulo>Já sabe por onde começar?</Titulo>
//             <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
//             <input placeholder="Escreva sua próxima leitura"></input>
//         </PesquisaContainer>
//     )
// }
