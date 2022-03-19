// Slider with fade transition animation using opacity property in CSS

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


// function that adds hideSlide class to current slide, and removes it from next slide. probably have to increment an iterator
function showNextSlide() {
    // function that checks slides for .hideSlide, and saves the index ofthe    slide that isn't hidden
    slideArray.forEach(function(slide) {
        if (!slide.classList.contains('hideSlide')) {
            indexOfPreviouslyVisibleSlide = slideArray.indexOf(slide);
        };
    });
    // set slide of that index to hidden
    slideArray[indexOfPreviouslyVisibleSlide].classList.add('hideSlide');
    // compare index to array length. if last slide, set next slide tofirst.    otherwise, set next to next slide
    if (indexOfPreviouslyVisibleSlide === slideArray.length - 1) {
        indexOfNextSlide = 0;
    } else {
        indexOfNextSlide = indexOfPreviouslyVisibleSlide + 1;
    };
    // set slide to unhidden
    slideArray[indexOfNextSlide].classList.remove('hideSlide');
};


// Automated Scrolling using function that Right Arrow Event Listener uses
// Assigns a variable to the interval ID return of automated scrolling
let intervalId = setInterval(showNextSlide, 5000);


// RIGHT ARROW
rightArrow.addEventListener('click', function() {
    showNextSlide();
    // Clear automated scrolling interval
    clearInterval(intervalId);
    // Start automated scrolling interval again
    // Because of scoping, must update value of intervalId
    intervalId = setInterval(showNextSlide, 5000);
});


// LEFT ARROW
// function that adds Hidden attribute to current slide, and removes it from previous slide. probably have to increment an iterator
leftArrow.addEventListener('click', function(click) {
    // function that checks slides for .hideSlide, and saves the index of the slide that isn't hidden
    slideArray.forEach(function(slide) {
        if (!slide.classList.contains('hideSlide')) {
            indexOfPreviouslyVisibleSlide = slideArray.indexOf(slide);
        };
    });
    // set slide of that index to hidden
    slideArray[indexOfPreviouslyVisibleSlide].classList.add('hideSlide');

    // compare index to array length. if first slide, set next slide to last. otherwise, set next to previous slide
    if (indexOfPreviouslyVisibleSlide === 0) {
        indexOfNextSlide = slideArray.length - 1;
    } else {
        indexOfNextSlide = indexOfPreviouslyVisibleSlide - 1;
    };
    // set slide to unhidden
    slideArray[indexOfNextSlide].classList.remove('hideSlide');
    // Clear automated scrolling interval
    clearInterval(intervalId);
    // Start automated scrolling interval again
    // Because of scoping, must update value of intervalId
    intervalId = setInterval(showNextSlide, 5000);
});


// functions that adds .hideSlide to other slides, and removes it from slide associated with button clicked

buttonArray.forEach(function(button) {
    button.addEventListener('click', function(click) {
        slideArray.forEach(function(slide) {
            slide.classList.add('hideSlide');
        });
        let indexOfButtonClicked = buttonArray.indexOf(button);
        slideArray[indexOfButtonClicked].classList.remove('hideSlide');
        // Clear automated scrolling interval
        clearInterval(intervalId);
        // Start automated scrolling interval again
        // Because of scoping, must update value of intervalId
        intervalId = setInterval(showNextSlide, 5000);
    });
});
