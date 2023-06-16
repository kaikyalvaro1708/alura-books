import './estilo.css';
import Logo from '../logo';
import OpcoesHeader from '../opcoesHeader';
import IconesHeader from '../iconesHeader';

function header(){
    return(
    <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
    </header>
    )
}

export default header