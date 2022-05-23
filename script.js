// create app object (portfolioApp)
const portfolioApp = {};

portfolioApp.init = () => {
    portfolioApp.eventListenerSetUp();
    portfolioApp.changeNavColour();
}

// create a method which sets up all the event listeners within the app
portfolioApp.eventListenerSetUp = () => {
    // creating an event listener to close the box when an anchor is clicked.
    let clickNav = document.querySelectorAll('.slideNav');
    clickNav.forEach(clickIndividualNav => {
        clickIndividualNav.addEventListener('click', () => {
            portfolioApp.displayNav();
            portfolioApp.transformNavButton();
        })
    });

    // event listener for when the side bar arrow is clicked
    document.querySelector('.slideOutSideNav').addEventListener('click', () => {
        portfolioApp.displaySideNav();
    });

    // event listener for when the top nav button is clicked
    document.querySelector('.menuButton').addEventListener('click', () => {
        portfolioApp.transformNavButton();
        portfolioApp.displayNav();
    });
}

// method for toggling classes to display the side nav words
portfolioApp.displaySideNav = () => {
    const slideOutNav = document.querySelectorAll('.sideNavP');

    slideOutNav.forEach( pElement => {
        pElement.classList.toggle('slideOut') 
    });
    document.querySelector('.showSlide').classList.toggle('slideUl');
    document.querySelector('.slideOutSideNavImg').classList.toggle('flip');
    document.querySelector('.slideOutSideNav').classList.toggle('move-arrow-left');
    document.querySelector('.slideOutSideNav').classList.toggle('move-arrow-right');
}

// method for calling the transform button for the nav bar at top
portfolioApp.transformNavButton = () => {

    document.querySelector('.menuButton').classList.toggle('open');

}

// method for calling the display of nav
portfolioApp.displayNav = () => {
    // display nav
    document.querySelector('.slideOutNav').classList.toggle('appear');
    // display animation for the ul
    document.querySelector('.slideNavigation').classList.toggle('navAnimation');
    
}

// Create a method for when the section is in the view
portfolioApp.changeNavColour = () => {
    const sections = [...document.querySelectorAll('section')];
    const anchorNavList = [...document.querySelectorAll('.colourNav')]
    const pNavList = [...document.querySelectorAll('.sideNavP')]
    
    // adding event Listener to change the color
    window.addEventListener('scroll', function () {
    
        const scrollFromTop = window.pageYOffset
    
        for (let i = 0; sections.length > i; i++) {
    
            if (scrollFromTop <= (sections[i].offsetTop + sections[i].offsetHeight - 10)) {
                // console.log(sections[i]);
                // console.log(anchorNavList[i]);
                for (let x = 0; anchorNavList.length > x; x++) {
                    if (i === x) {
                        anchorNavList[x].classList.add("changeAnchorColour");
                        pNavList[x].classList.add("changePColour");
                    } else {
                        anchorNavList[x].classList.remove("changeAnchorColour");
                        pNavList[x].classList.remove("changePColour");
                    }
                }
                
                break
            }
    
        }
    
    })
}

portfolioApp.init();