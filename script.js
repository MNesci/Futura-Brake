// Slider

// Slide Array
const slideArray = Array.from(document.querySelectorAll('.slide'));

// assign each arrow to a variable
const leftArrow = document.querySelector('.sliderArrowLeft');
const rightArrow = document.querySelector('.sliderArrowRight');

// assign each button to a variable
const buttonArray = Array.from(document.querySelectorAll('.slideButton'));


// Declare indexOfPreviouslyVisibleSlide and indexOfNextSlide Globally
let indexOfPreviouslyVisibleSlide;
let indexOfNextSlide;

// RIGHT ARROW
rightArrow.addEventListener('click', showNextSlide());

// function that adds Hidden attribute to current slide, and removes it from next slide. probably have to increment an iterator
function showNextSlide() {
    // function that checks slides for hidden, and saves the index of the slide that isn't hidden
    slideArray.forEach(function(slide) {
        if (!slide.hasAttribute('hidden')) {
            indexOfPreviouslyVisibleSlide = slideArray.indexOf(slide);
        };
    });
    // set slide of that index to hidden
    slideArray[indexOfPreviouslyVisibleSlide].setAttribute('hidden', 'hidden');

    // compare index to array length. if last slide, set next slide to first. otherwise, set next to next slide
    if (indexOfPreviouslyVisibleSlide === slideArray.length - 1) {
        indexOfNextSlide = 0;
    } else {
        indexOfNextSlide = indexOfPreviouslyVisibleSlide + 1;
    };
    // set slide to unhidden
    slideArray[indexOfNextSlide].removeAttribute('hidden');
}

// LEFT ARROW
// function that adds Hidden attribute to current slide, and removes it from previous slide. probably have to increment an iterator
leftArrow.addEventListener('click', function(click) {
    // function that checks slides for hidden, and saves the index of the slide that isn't hidden
    slideArray.forEach(function(slide) {
        if (!slide.hasAttribute('hidden')) {
            indexOfPreviouslyVisibleSlide = slideArray.indexOf(slide);
        };
    });
    // set slide of that index to hidden
    slideArray[indexOfPreviouslyVisibleSlide].setAttribute('hidden', 'hidden');

    // compare index to array length. if first slide, set next slide to last. otherwise, set next to previous slide
    if (indexOfPreviouslyVisibleSlide === 0) {
        indexOfNextSlide = slideArray.length - 1;
    } else {
        indexOfNextSlide = indexOfPreviouslyVisibleSlide - 1;
    };
    // set slide to unhidden
    slideArray[indexOfNextSlide].removeAttribute('hidden');
});


// functions that adds Hidden to other slides, and removes it from slide associated with button clicked

buttonArray.forEach(function(button) {
    button.addEventListener('click', function(click) {
        slideArray.forEach(function(slide) {
            slide.setAttribute('hidden', 'hidden');
        });
        let indexOfButtonClicked = buttonArray.indexOf(button);
        slideArray[indexOfButtonClicked].removeAttribute('hidden');
    });
});


// Automated Scrolling using function that Right Arrow Event Listener uses
setInterval(showNextSlide, 5000);


// FIGURE OUT ANIMATION OF SOME KIND (FLIP OR SCROLL MAYBE)