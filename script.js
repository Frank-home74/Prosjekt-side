document.addEventListener('DOMContentLoaded', function() {
    const customerRegisterForm = document.getElementById('customerRegisterForm');
    const employeeRegisterForm = document.getElementById('employeeRegisterForm');

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
});
