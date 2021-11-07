import {useState} from 'react'
const ItemCount = (props) => {
    const [cantidad, setCantidad] = useState(1)

    const increment = () => {
        if (cantidad < props.stock) setCantidad(cantidad + 1);
    }

    const decrement = () =>{
        if (cantidad > props.initial) setCantidad(cantidad - 1);
    }

    const agregarAlCarrito = () =>{
        console.log(`se agregaron ${cantidad} ${props.title} al carrito `)
    }

    return(
        <>
            <p className="cantidad" >cantidad: {cantidad}</p>
            <div className="counter">   
                <button onClick={increment} className="btn btn-info">+</button>
                <button onClick={agregarAlCarrito} className="btn btn-danger">Agregar</button>
                <button onClick={decrement} className="btn btn-info">-</button>
            </div>
        </>
    );
}

export default ItemCount 