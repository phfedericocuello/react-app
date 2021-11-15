import Item from "./Item";  
import {data} from "./data"
import React, {useState, useEffect} from "react";



const ItemList = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const productos = () =>{
            return new Promise((resolve, reject) => {
                setTimeout( () =>{
                    resolve(data)
                }, 2000)
            })
        }
        productos().then((items) =>{
            setProductos(items)
            setCargando(false)
        })
    },[])
    return(
        <>
            {
                cargando ? <h2>Cargando informacion al catalogo</h2> :

                
                productos.map( (producto)=>
                    <Item
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

export default ItemList;