// O import serve para puxar os arquivos
import './App.css';
import Header from './componentes/header';
import Pesquisa from './componentes/pesquisa';
import UltimosLancamentos from './componentes/ultimosLancamentos';
// import {Titulo} from './componentes/titulo';

function App() {
  return (
    <div className='App'>
        <Header/>
        <Pesquisa/>
        <UltimosLancamentos/>
        
    </div>
  );
}


// Permiti acessar os componentes
export default App;



// =========== STYLED-COMPONENTS =========

// import styled from 'styled-components';

// const AppContainer = styled.div`
//     width: 100vw;
//     height: 100vh;
//     background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);
// `

// function App() {
//   return (
//     <div className='App'>
//     {/* <AppContainer> */}
//         <Header/>
//     {/* </AppContainer> */}
//     </div>
//   );
// }