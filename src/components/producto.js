import ItemCount from './ItemCount'


const Producto = ({title, precio, id, thumbnail, stock}) => {
    return(
        <>
        <div className="contenedor shadow p-3 mb-5 bg-body">
            <div className="imagen-producto">
                <img src={thumbnail} alt={title} />
            </div>
            <div className="informacion-producto">
                <h3>{title}</h3>
                <p className="precio">{precio}</p>
            </div>
            <ItemCount  initial="1" stock={stock} title={title}/>
        </div>
    </>
    )
}

export default Producto;