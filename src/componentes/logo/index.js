import './estilo.css';
import logo from '../../imagens/logo.svg';

// Componentes são funções que retornam um html
function Logo(){
    return(       
    <div className='logo'>
        <img className="logo-img" 
        src={logo} 
        alt="logo da alura books">
        </img>
        <p><strong>Alura</strong> books</p>
    </div>
  )
}

// exportando a função como "Logo"
export default Logo;