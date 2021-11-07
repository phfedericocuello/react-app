import Producto from "./producto";  
import {data} from "./data"

const Productos = (props) => {
    return(
        <>
            {
                data.map( (producto)=>
                    <Producto
                    key= {producto.id}
                    title= {producto.title}
                    thumbnail= {producto.thumbnail}
                    precio= {producto.precio}
                    stock= {producto.stock}
                    />
                )
            }
        </>
    )
}

export default Productos;