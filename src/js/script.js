document.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";  // Redirigir a un video de Rick Astley
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);
console.warn("%cDon't use the Dev Tools! If you aren't a developer, this can be dangerous.", "font-size: 24px; color: gold; font-weight: bold;");

// Obtener el botón y el div checkout
const buyButton = document.getElementById('buy');
const checkoutDiv = document.getElementById('checkout');
const exitCheckout = document.querySelector('.exit-checkout');

// Ocultar el div del checkout cuando se presione el párrafo de "Exit Checkout"
exitCheckout.addEventListener('click', () => {
    checkoutDiv.style.display = 'none';  // Ocultar el checkout
});

function openCheckout() {
    checkoutDiv.style.display = 'block';  // Mostrar el checkout
}