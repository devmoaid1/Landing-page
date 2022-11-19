const sections=document.querySelectorAll('section')

console.log(sections.length)


const fragment = document.createDocumentFragment()
const navBar=document.getElementById('navbar__list')

for(let i =1; i<=sections.length;i++){
    const navItem=document.createElement('a')
    navItem.setAttribute('href',"#section"+i)
    navItem.textContent="Section"+i 
    fragment.appendChild(navItem)
}

navBar.appendChild(fragment)