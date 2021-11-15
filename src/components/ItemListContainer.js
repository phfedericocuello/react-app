import { data } from "./data";
import ItemList from "./ItemList";



const ItemListContainer = ({id, title, precio, thumbnail}) => {
    return(
        <>
            <h1>Catalogo de la tienda</h1>
           <div className="catalogo">
               <ItemList items={data}/>
           </div>
            
        </>
    )
}

export default ItemListContainer;