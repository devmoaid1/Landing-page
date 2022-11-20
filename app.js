const sections=document.querySelectorAll('section')

console.log(sections.length)


const fragment = document.createDocumentFragment()
const navBar=document.getElementById('navbar__list')

for(let i =1; i<=sections.length;i++){
    const navItem=document.createElement('div')
    navItem.setAttribute('class',"nav_item")
    navItem.textContent="Section"+i
    
    fragment.appendChild(navItem)
}


navBar.appendChild(fragment)
navBar.addEventListener('click',function(event){
    console.log(event.target.textContent)
}) 


const navItem= document.getElementsByClassName('nav_item') 





