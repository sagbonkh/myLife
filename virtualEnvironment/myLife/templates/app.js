const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length;i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
}

PageTransitions();



// It's perfectly fine to use an arrow function as the second "callback" 
// parameter to addEventListener(). The trick is to specify a parameter for the 
// event that is passed to the listener, then instead of using "this"
//  to reference the element associated with the event,
//  use the "target" property of the passed in event. Like such:

// element.addEventListener('click', (ev) => {
//     const btn = ev.target; // <--- "btn" is now the button element that was clicked
// });

//Also, it's much simper to add & remove class names from an element using its 
//"classList" property. Use element.classList.add('some-class') to add the class
//and element.classList.remove('some-class') to remove it. 