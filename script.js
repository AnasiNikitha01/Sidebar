
const button = document.querySelector(".side-btn");

const sidebar = document.querySelector(".sidebar");

const logo = document.getElementById('logo-name');

const social_media = document.querySelector('.social-media');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const link1 = document.getElementById('link1')
    const link2 = document.getElementById('link2')
    const link3 = document.getElementById('link3')
    const link4 = document.getElementById('link4')
    const link5 = document.getElementById('link5')

    if (button.innerHTML === '<i id="arrow-btn" class="bi bi-arrow-bar-left"></i>') {

        button.innerHTML = '<i id="arrow-btn" class="bi bi-arrow-bar-right"></i>'

        link1.innerHTML = '<i class="bi bi-house-door-fill"></i>';
        link2.innerHTML = '<i class="bi bi-mailbox"></i>';
        link3.innerHTML = '<i class="bi bi-chat-right-text-fill"></i>';
        link4.innerHTML = '<i class="bi bi-shop"></i>';
        link5.innerHTML = '<i class="bi bi-gear"></i>';

        sidebar.style.width = '50px';

        logo.innerHTML = '<i class="bi bi-amd"></i>';

        social_media.style.flexDirection = 'column';
        social_media.style.alignItems = 'center';
        social_media.style.width = '60%'
        button.style.left = "80px"

    }
    else {
        button.innerHTML = '<i id="arrow-btn" class="bi bi-arrow-bar-left"></i>';
        link1.innerHTML = 'Home';
        link2.innerHTML = 'Posts';
        link3.innerHTML = 'Messages';
        link4.innerHTML = 'Store';
        link5.innerHTML = 'Settings';

        sidebar.style.width = '200px';

        logo.innerHTML = 'MY LOGO';
        social_media.style.flexDirection = 'row';
        social_media.style.alignItems = 'flex-end';
        social_media.style.width = '80%'
        button.style.left = '230px'
    }


})