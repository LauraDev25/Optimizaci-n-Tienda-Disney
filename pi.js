function getCart(){let t=localStorage.getItem("cart");return t?JSON.parse(t):[]}function saveCart(t){localStorage.setItem("cart",JSON.stringify(t))}function updateCart(){let t=document.getElementById("cart-items"),e=document.getElementById("total-price"),a=document.getElementById("cart-count"),r=getCart();t.innerHTML="";let n=0;r.forEach((e,a)=>{n+=e.price,t.innerHTML+=`
    <li class="cart-item">
        ${e.name} - $${e.price.toFixed(3)}
        <button onclick="removeFromCart(${a})">Eliminar</button>
    </li>
`}),e.textContent=n.toFixed(3),a.textContent=r.length}function addToCart(t,e){let a=getCart();a.push({name:t,price:e}),saveCart(a),updateCart()}function removeFromCart(t){let e=getCart();e.splice(t,1),saveCart(e),updateCart()}function clearCart(){saveCart([]),updateCart()}function toggleCart(){let t=document.getElementById("cart-popup");t.style.display="block"===t.style.display?"none":"block"}window.onload=updateCart;





