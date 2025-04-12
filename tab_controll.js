const items = document.querySelectorAll('.item');
const home = document.querySelector('.home');
const invoice = document.querySelector('.noti');


invoice.classList.add('hidden')


items.forEach(item => {
    item.addEventListener('click', () => {

        items.forEach(element => {
            element.classList.remove('active');
        });


        item.classList.add('active');


        if (item.classList.contains('home')) {
            home.classList.remove('hidden')
            invoice.classList.add('hidden')
        } else if (item.classList.contains('noti')) {
            home.classList.add('hidden')
            invoice.classList.remove('hidden')
        }
    });
});