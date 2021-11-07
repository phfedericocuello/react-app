import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Catalogo from './components/Catalogo'
import {data} from './components/data'


function App() {
  return (
   <>
      <Header />
      <Catalogo productos={data} />
   </>
  );
}

export default App;

