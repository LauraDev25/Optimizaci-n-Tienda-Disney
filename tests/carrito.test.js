// carrito.test.js
const { addToCart, removeFromCart, calculateTotal } = require('./carrito');

describe('Carrito de compras', () => {
  let cart;

  beforeEach(() => {
    cart = [];
  });

  test('Agregar producto al carrito', () => {
    const product = { id: 1, name: 'Producto 1', price: 100 };
    const updatedCart = addToCart(cart, product);
    
    expect(updatedCart.length).toBe(1);
    expect(updatedCart[0].id).toBe(1);
    expect(updatedCart[0].quantity).toBe(1);
  });

  test('Incrementar cantidad de producto existente en el carrito', () => {
    const product = { id: 1, name: 'Producto 1', price: 100 };
    addToCart(cart, product);
    const updatedCart = addToCart(cart, product);
    
    expect(updatedCart.length).toBe(1);
    expect(updatedCart[0].quantity).toBe(2);
  });

  test('Eliminar producto del carrito', () => {
    const product1 = { id: 1, name: 'Producto 1', price: 100 };
    const product2 = { id: 2, name: 'Producto 2', price: 200 };
    addToCart(cart, product1);
    addToCart(cart, product2);

    const updatedCart = removeFromCart(cart, 1);
    expect(updatedCart.length).toBe(1);
    expect(updatedCart[0].id).toBe(2);
  });

  test('Calcular total a pagar', () => {
    const product1 = { id: 1, name: 'Producto 1', price: 100 };
    const product2 = { id: 2, name: 'Producto 2', price: 200 };

    addToCart(cart, product1);
    addToCart(cart, product2);
    addToCart(cart, product2); // Añadimos una unidad más del producto 2

    const total = calculateTotal(cart);
    expect(total).toBe(500); // 100 + (200 * 2) = 500
  });
});
