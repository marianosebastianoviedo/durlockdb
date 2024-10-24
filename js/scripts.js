async function enviarMail(){
    const modal = new bootstrap.Modal(document.getElementById("loading"), {});
    modal.show();
    var formEl = document.forms.contactForm;
    var formData = new FormData(formEl);
    var name = formData.get('nombre');
    var tel = formData.get('telefono');
    var mail = formData.get('email');
    var msg = formData.get('consulta');
    console.log(name);
    console.log(tel);
    console.log(mail);
    console.log(msg);
    if (msg === '' || name === '' || tel === '' || mail === '') {
        alert('Todos los campos del formulario son requeridos...');
        return modal.hide();
    } else {
        
        await fetch("https://formsubmit.co/ajax/52372b027aaacde5c9757ce5c415adb5", {
            method: "POST",
headers: { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
},
body: JSON.stringify({
    Nombre: name,
    Telefono: tel,
    Email: mail,
    Consulta: msg,
})
})
.then(response => {response.json(); modal.hide();document.getElementById("contactForm").reset(); alert('Su consulta fue enviada con éxito...');})
.then(data => {console.log(data); modal.hide()})
.catch(error => {console.log(error); modal.hide()});
}
}
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
