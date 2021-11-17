import ItemDetail from "./ItemDetail";  
import {data} from "./data"
import React, {useState, useEffect} from "react";



const ItemList = () => {

    const [producto, setProducto] = useState([])
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
            const producto = items.find(producto => producto.id === '1')
            setProducto(producto)
            setCargando(false)
        })
    },[])
    return(
        <>
            {
                cargando ? <h2>Cargando item</h2> :

                
                
                    <ItemDetail
                    key= {producto.id}
                    title= {producto.title}
                    thumbnail= {producto.thumbnail}
                    precio= {producto.precio}
                    stock= {producto.stock}
                    />
                
                
            }
        </>
    )
}

export default ItemList;