import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer'
import {data} from './components/data'
import ItemDetailContainer from './components/ItemDetailContainer'



function App() {
  return (
   <>
      <Header />
      <ItemListContainer productos={data} />
      <ItemDetailContainer items={data}/>
   </>
  );
}

export default App;

