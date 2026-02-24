import "./Card.css"
import { useState } from "react"

export const ShoppingCart = () => {

    const products = [
        {productName: 'Producto 1', productPrice: 10000, productId: '01'},
        {productName: 'Producto 2', productPrice: 20000, productId: '02'},
        {productName: 'Producto 3', productPrice: 30000, productId: '03'},
    ];

    const [cart, setCart] = useState([]);



    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const deleteProduct = (indexTask) => {
        const cartFiltered = cart.filter((_, index) => indexTask !== index);
        setCart(cartFiltered);
    };

    return(
        <>
            <div className="products">

                {products.map((product, index) => (
                    <div className="card" key={product.productId}>
                        <h2>{product.productName}</h2>
                        <h3>Precio: ${product.productPrice}</h3>
                        <p>ID: {product.productId}</p>
                        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
                    </div>
                ))}

            </div>

            <div className="cart">
                <h2>Carrito de compras</h2>
                {cart.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <p>{item.productName} - ${item.productPrice} - x{cart.filter(cartItem => cartItem.productId === item.productId).length}</p>
                        <button onClick={() => deleteProduct(index)}>Eliminar</button>
                    </div>
                ))}
            </div>

            <div className="cartInfo">
                <h3>Total: ${cart.reduce((total, item) => total + item.productPrice, 0)}</h3>
                <h3></h3>
            </div>
            
        </>
    )
}