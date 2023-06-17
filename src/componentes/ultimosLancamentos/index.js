import './estilo.css'
import { useState } from 'react';
import {livros} from './dadosLancamentos';

function UltimosLancamentos(){

    return(
        <section>
            <h2 cor="#000">Últimos Lançamentos</h2>
             {/* Para aparece os livros */}
            <div>
                {livros.map(livro =>(
                <img src={livro.src}></img>
            ))}
            </div>
        </section>
    )
}

export default UltimosLancamentos
