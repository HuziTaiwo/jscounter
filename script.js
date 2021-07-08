const count = document.querySelector('.count');
const lwrCount = document.querySelector('.l-count');
const addCount = document.querySelector('.a-count');
const output = document.querySelector('.output');
let counter = null;

lwrCount.addEventListener('click', () => {   
    if(counter > 0 && counter <= 50) {
        counter --;
        count.textContent = counter;
    }    
});

addCount.addEventListener('click', () => {
    if(count.textContent >= 0 && counter <= 49) {
        counter ++;
        count.textContent = counter;
    }
});
