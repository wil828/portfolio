// create app object (portfolioApp)
const portfolioApp = {};

portfolioApp.init = () => {
    portfolioApp.eventListenerSetUp();
}

// create a method which sets up all the event listeners within the app
portfolioApp.eventListenerSetUp = () => {
    // event listener for when the side bar arrow is clicked
    document.querySelector('.slideOutSideNav').addEventListener('click', () => {
        portfolioApp.displaySideNav();
    })
}


portfolioApp.displaySideNav = () => {
    const slideOutNav = document.querySelectorAll('.sideNavP');

    slideOutNav.forEach( pElement => {
        pElement.classList.toggle('slideOut') 
    });
    document.querySelector('.showSlide').classList.toggle('slideUl');
    document.querySelector('.slideOutSideNavImg').classList.toggle('flip');
    console.log(document.querySelector('.slideOutSideNav'));

}

portfolioApp.init();