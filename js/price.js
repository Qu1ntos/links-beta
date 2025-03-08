document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        const incrementButton = service.querySelector('.increment');
        const decrementButton = service.querySelector('.decrement');
        const quantityElement = service.querySelector('.quantity');
        const resultElement = service.querySelector('.result');
        const price = parseInt(quantityElement.dataset.price);

        incrementButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            resultElement.textContent = `== ${quantity * price} грн`;
            updateFinalResult();
        });

        decrementButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
                resultElement.textContent = `== ${quantity * price} грн`;
                updateFinalResult();
            }
        });
    });

    function updateFinalResult() {
        let total = 0;
        services.forEach(service => {
            const quantity = parseInt(service.querySelector('.quantity').textContent);
            const price = parseInt(service.querySelector('.quantity').dataset.price);
            total += quantity * price;
        });
        document.getElementById('final-result').textContent = total;
    }
});
