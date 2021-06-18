const box = document.querySelector('.btn');
console.log(box);
box.addEventListener('click', (e)=> {
    box.classList.toggle('active');
    console.log(e);
});