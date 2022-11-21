// global variables 
const sections = document.querySelectorAll('section') // all sections 
const fragment = document.createDocumentFragment()
const navBar = document.getElementById('navbar__list') // nav bar container



// generate nav items based on sections
const generateNavItems = (sectionsList) => {

    sectionsList.forEach((section) => {
        const navItemHolder = document.createElement('li')
        const navItem = document.createElement('a') // create a anchor for nav item
        navItem.setAttribute('class', "nav_item") // set a class for css styling
        navItem.setAttribute('href', '#' + section.id) // for navigation to section 

        navItem.textContent = section.firstElementChild.firstElementChild.textContent // content refers for section heading 
        navItemHolder.appendChild(navItem)
        fragment.appendChild(navItemHolder) // append new navItem to fragment
    })
}


// check if section is in viewPort
const isInViewPort = (element) => {

    const rect = element.getBoundingClientRect()


    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )



}


// handle set active class for scrolling event
const updateSectionClassActive = () => {
    for (const section of sections) {
        if (isInViewPort(section)) {
            if (section.classList.length == 0) {
                section.classList.add('class')
                section.setAttribute('class', "active-class")

            }
        } else {
            section.setAttribute('class', "")
        }
    }

}


// handle click event on navItem
const handleNavItemClick = event => {
    event.preventDefault()
    const navLinks = document.getElementById('navbar__list').children
    for (let navLink of navLinks) {

        const navLinkHref = navLink.firstElementChild.attributes['href'].value // get the link of the a child
        const targetHref = event.target.attributes['href'].value // target href


        if (navLinkHref === targetHref) {
            event.target.setAttribute('class', 'active-nav-item') // change to active for target
        } else {
            navLink.children[0].setAttribute('class', 'nav_item') // change rest of links to normal style 

        }

    }

    const section = document.querySelector(event.target.attributes['href'].value)

    section.setAttribute('class', 'active-class') // for active state 
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });



}

// proccesses 

generateNavItems(sections)
navBar.appendChild(fragment)

// events handler

navBar.addEventListener('click', handleNavItemClick)


document.addEventListener('scroll', updateSectionClassActive)