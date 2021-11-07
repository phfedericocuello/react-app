import { data } from "./data";
import Productos from "./productos";



const Catalogo = ({id, title, precio, thumbnail}) => {
    return(
        <>
            <h1>Catalogo de la tienda</h1>
           <div className="catalogo">
               <Productos productos={data}/>
           </div>
            
        </>
    )
}

export default Catalogo;