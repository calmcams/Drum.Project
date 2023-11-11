document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.drum');

    const sounds = {
        'leftCrash': new Audio('./sounds/leftCrash.mp3'),
        'tom1': new Audio('./sounds/tom1.mp3'),
        'snare': new Audio('./sounds/snare.mp3'),
        'kickbass': new Audio('./sounds/kickbass.mp3'),
        'tom3': new Audio('./sounds/tom3.mp3'),
        'tom2': new Audio('./sounds/tom2.mp3'),
        'rightCrash': new Audio('./sounds/rightCrash.mp3'),
    };

    buttons.forEach(button => {
        const sound = button.getAttribute('data-sound');
        
        button.addEventListener('click', function () {
            playSound(sound);
        });
    });

    function playSound(sound) {
        sounds[sound].play();
    }
});
