


const sections=document.querySelectorAll('section') // all sections 
const fragment = document.createDocumentFragment()
const navBar=document.getElementById('navbar__list') // nav bar container

// generate nav items based on sections
const generateNavItems=(sectionsList)=>{
   
    sectionsList.forEach((item,index)=>{
        const navItem=document.createElement('a') // create a div containe for nav item
        navItem.setAttribute('class',"nav_item") // set a class for css styling
        navItem.setAttribute('href','#'+item.id) // for navigation to section 
        
        navItem.textContent=item.firstElementChild.firstElementChild.textContent // content refers for section heading 
            
        fragment.appendChild(navItem) // append new navItem to fragment
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
        section.setAttribute('class',"your-active-class")
      }   
   }else{
    section.classList.remove('class')
   }
  }
}


// handle click event on navItem
const handleNavItemClick=event=>{
    const section = document.querySelector(event.target.attributes['href'].value)
    section.setAttribute('class','your-active-class')

}



generateNavItems(sections)
navBar.appendChild(fragment)  


navBar.addEventListener('click',handleNavItemClick)


document.addEventListener('scroll',updateSectionClassActive)








