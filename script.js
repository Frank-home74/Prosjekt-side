document.addEventListener('DOMContentLoaded', function() {
    const customerRegisterForm = document.getElementById('customerRegisterForm');
    const employeeRegisterForm = document.getElementById('employeeRegisterForm');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navbar = document.getElementById('navbar');

    if (customerRegisterForm) {
        customerRegisterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('customerUsername').value;
            const password = document.getElementById('customerPassword').value;
            const confirmPassword = document.getElementById('customerConfirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passordene stemmer ikke overens!');
                return;
            }

            // Her kan du legge til logikk for å lagre kunde brukerdata
            console.log('Kunde Registrer:', { username, password });
        });
    }

    if (employeeRegisterForm) {
        employeeRegisterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('employeeUsername').value;
            const password = document.getElementById('employeePassword').value;
            const confirmPassword = document.getElementById('employeeConfirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passordene stemmer ikke overens!');
                return;
            }

            // Her kan du legge til logikk for å lagre ansatt brukerdata
            console.log('Ansatt Registrer:', { username, password });
        });
    }

    if (hamburgerMenu && navbar) {
        hamburgerMenu.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    }

    // Oppdater den aktive lenken i navigasjonsmenyen
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('#navbar li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Legg til event listener for hover-effekten
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.classList.add('hover');
            }
        });

        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.classList.remove('hover');
            }
        });
    });
});
