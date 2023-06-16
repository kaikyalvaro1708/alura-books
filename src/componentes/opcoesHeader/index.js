import './estilo.css';

const textoOpcoes = ['Categorias', 'Favoritos','Minha Estante']

function opcoesHeader(){
    return(
    <ul className='opcoes'>
        {/* O map percorre o objeto textoOpcoes e coloca na li */}
        {textoOpcoes.map((texto)=> (
        <li className='opcao'><p>{texto}</p></li>
        ))}
    </ul>
    )
}


export default opcoesHeader