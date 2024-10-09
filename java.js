document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    if (name && email && message) {
        document.getElementById('responseMessage').textContent = 'Mensagem enviada com sucesso!';
    } else {
        document.getElementById('responseMessage').textContent = 'Por favor, preencha todos os campos.';
    }
});
let index = 0;
function showNextImage() {
    const images = document.querySelectorAll('.carousel img');
    images[index].style.transform = `translateX(-${100 * index}%)`;
    index = (index + 1) % images.length;
    setTimeout(showNextImage, 3000); 
}

showNextImage();

window.onload = function() {
    document.getElementById('welcome-popup').style.display = 'block';
};

function closePopup() {
    document.getElementById('welcome-popup').style.display = 'none';
}

