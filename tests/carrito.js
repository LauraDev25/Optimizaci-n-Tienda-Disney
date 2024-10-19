// carrito.js
const addToCart = (cart, product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    return cart;
  };
  
  const removeFromCart = (cart, productId) => {
    return cart.filter(item => item.id !== productId);
  };
  
  const calculateTotal = (cart) => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };
  
  module.exports = { addToCart, removeFromCart, calculateTotal };
  