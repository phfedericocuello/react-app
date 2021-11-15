import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer'
import {data} from './components/data'


function App() {
  return (
   <>
      <Header />
      <ItemListContainer productos={data} />
   </>
  );
}

export default App;

