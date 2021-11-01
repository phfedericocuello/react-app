import cart from '../shopping-cart.png';

function Cart(){
    return(
        <div className="carrito">
            < img src={cart} alt="carrito" className="cartLogo" />
        </div>
    )    
}

export default Cart;