const playButtons = document.querySelectorAll('.drum');
const buttons = ['w','a','s','d','j','k','l'];
document.addEventListener('keydown', (event) => {
    getSound(event.key);
    burronAnimation(event.key);
});

playButtons.forEach( (button) => button.addEventListener('click', handleClick));

function handleClick() {
    getSound(this.textContent);
    burronAnimation(this.textContent);
}

function burronAnimation(button) {
    if (!buttons.includes(button)) {
        return;
    }
    document.querySelectorAll('button').forEach( (button) => button.classList.remove('pressed'));
    document.querySelector('.' + button).classList.add('pressed');
}

function getSound(buttonName) {

    switch (buttonName) {
        case 'w':
            new Audio('./sounds/tom-1.mp3').play();
            break;
        case "a":
            new Audio('./sounds/tom-2.mp3').play();
            break;
        case "s":
            new Audio('./sounds/tom-3.mp3').play();
            break;
        case "d":
            new Audio('./sounds/tom-4.mp3').play();
            break;
        case "j":
            new Audio('./sounds/snare.mp3').play();
            break;
        case "k":
            new Audio('./sounds/crash.mp3').play();
            break;
        case "l":
            new Audio('./sounds/kick-bass.mp3').play();
            break;
        
        default: ;
    }
}