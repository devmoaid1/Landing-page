


const sections=document.querySelectorAll('section') // all sections 
const fragment = document.createDocumentFragment()
const navBar=document.getElementById('navbar__list') // nav bar container


const generateNavItems=function(sectionsList){
   
    sectionsList.forEach(function(item,index){
        const navItem=document.createElement('a') // create a div containe for nav item
        navItem.setAttribute('class',"nav_item") // set a class for css styling
        navItem.setAttribute('href','#'+item.id)
        console.log(item.id)
        navItem.textContent=item.firstElementChild.firstElementChild.textContent // content refers for section heading 
            
        fragment.appendChild(navItem) // append new navItem to fragment
    })
} 

// const handleNavItemClick=function(event){
   
//    event.preventDefault()
//    const section= document.getElementById(event.target.textContent.split(" ").join("")) // get corresponding section element for target nav item
//    console.log(event.target.textContent)
//    window.scrollTo()
// }




generateNavItems(sections)

navBar.appendChild(fragment)  
// navBar.addEventListener('click',handleNavItemClick) 


const navItem= document.getElementsByClassName('nav_item') 





