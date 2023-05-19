// SELETORES
const inputText = document.querySelector("#input-text");
inputText.addEventListener('keypress', (event) => {
    const character = event.key;
    if (character !== 'a'){
        event.preventDefault();
    }
})




const inputCheckbox = document.querySelector("#input-checkbox");
inputCheckbox.addEventListener('click', (event) => {
    event.preventDefault();
});



const hrefLink = document.querySelector("#href");
hrefLink.addEventListener('click', (event) => {
    event.preventDefault();
});
