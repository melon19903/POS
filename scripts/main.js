const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Форма отправлена!');
        this.reset();
    });
}
let images = ['10', '20', '30', '40'];
let currentIdx = 0;
function nextImg() {
    currentIdx = (currentIdx + 1) % images.length;
    document.getElementById('galleryImage').src = 'https://picsum.photos/id/' + images[currentIdx] + '/600/400';
}
