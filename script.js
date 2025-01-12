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
if (window.innerWidth < 768) {  // For mobile devices with width less than 768px
    const meta = document.querySelector('meta[name="viewport"]');
    meta.parentNode.removeChild(meta);

    const newMeta = document.createElement('meta');
    newMeta.name = "viewport";
    newMeta.content = "width=1024, initial-scale=1.0, user-scalable=no";
    document.head.appendChild(newMeta);
}
