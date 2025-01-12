document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you for contacting us, ${name}! We'll get back to you soon.`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all the fields.');
    }
});

// Floating header functionality
window.onscroll = function() {
    const header = document.getElementById("header");
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};
