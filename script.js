let activesSlideNumber = 1;

let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
};

let showSlide = (slideNumber) => {
    hideActiveSlide()
    document.querySelector('#slide' + slideNumber).classList.add('active');
};

let showNextSlide = () => {
    if (activesSlideNumber === 5) {
        activesSlideNumber = 1;
    } else {
        activesSlideNumber += 1;
    }
    showSlide(activesSlideNumber);
};

let showPreviousSilde = () => {
    if (activesSlideNumber === 1) {
        activesSlideNumber = 5;
    } else {
        activesSlideNumber -= 1;
    }
    showSlide(activesSlideNumber);
};

for(let i=1 ; i <= 5; i++ ) {
    let showSlideI = () => {
        activesSlideNumber = i;
        showSlide(i);
    }
    document.querySelector('#dot' +i).addEventListener('click', showSlideI);
}

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showPreviousSilde);

