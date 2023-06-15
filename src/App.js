// O import serve para puxar os arquivos
import './App.css';
import Logo from './componentes/logo';
import perfil from './imagens/perfil.svg';
import sacola from './imagens/sacola.svg';

// Objeto para os textos da li
const textoOpcoes = ['Categorias', 'Favoritos','Minha Estante']
const icones = [perfil, sacola];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          {/* O map percorre o objeto textoOpcoes e coloca na li */}
          {textoOpcoes.map((texto)=> (
            <li className='opcao'><p>{texto}</p></li>
          ))}
        </ul>
        <ul className="icones">
            {icones.map((icone)=>(
              <li className="icone"><img src={icone}></img></li>
            ))}
        </ul>
      </header>
    </div>
  );
}


// Permiti acessar os componentes
export default App;

