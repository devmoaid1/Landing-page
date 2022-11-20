// global variables 

const sections=document.querySelectorAll('section') // all sections 
const fragment = document.createDocumentFragment()
const navBar=document.getElementById('navbar__list') // nav bar container



// generate nav items based on sections
const generateNavItems=(sectionsList)=>{
   
    sectionsList.forEach((item,index)=>{
        const navItemHolder=document.createElement('li')
        const navItem=document.createElement('a') // create a anchor for nav item
        navItem.setAttribute('class',"nav_item") // set a class for css styling
        navItem.setAttribute('href','#'+item.id) // for navigation to section 
        
        navItem.textContent=item.firstElementChild.firstElementChild.textContent // content refers for section heading 
        navItemHolder.appendChild(navItem)
        fragment.appendChild(navItemHolder) // append new navItem to fragment
    })
} 


// check if section is in viewPort
const isInViewPort=(element)=>{
   
   const rect=element.getBoundingClientRect()

   
   return(
    rect.top >= 0 &&
	rect.left >= 0 &&
	rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
	rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
   )

  
    
}


// handle set active class for scrolling event
const updateSectionClassActive=()=>{
  for(const section of sections){
   if(isInViewPort(section)){
      if(section.classList.length==0){
        section.classList.add('class')
        section.setAttribute('class',"active-class") 
        
      }   
   }else{
    section.setAttribute('class',"")
   }
  }
  
}


// handle click event on navItem
const handleNavItemClick=event=>{
    const section = document.querySelector(event.target.attributes['href'].value)
    section.setAttribute('class','active-class') // for active state 

}

// proccesses 

generateNavItems(sections)
navBar.appendChild(fragment)  

// events handler

navBar.addEventListener('click',handleNavItemClick)


document.addEventListener('scroll',updateSectionClassActive)








