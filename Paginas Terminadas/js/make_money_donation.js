document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('numero-tarjeta').addEventListener('keypress', function (event) {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    });

    const expiryDateInput = document.getElementById('expiry-date');

    expiryDateInput.addEventListener('input', function (event) {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 1) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        this.value = value;
    });

    expiryDateInput.addEventListener('keydown', function (event) {
        if (event.key === 'Backspace') {
            let value = this.value;

            if (value.endsWith('/')) {
                this.value = value.slice(0, -1);
            }
        }
    });

    expiryDateInput.addEventListener('keypress', function (event) {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    });
});