document.getElementById('contactForm').addEventListener('submit', function (e) {
    const emailInput = document.getElementById('email');
    if (!emailInput.value.includes('@')) {
        alert('Por favor, ingrese un correo electrónico válido.');
        e.preventDefault();
}
});