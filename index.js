document.body.style.backgroundColor = '#005085'

document.body.style.backgroundImage = 'url(https://www.transparenttextures.com/patterns/45-degree-fabric-light.png)';

const replaceText = document.getElementById('replace-text')

replaceText.style.color    = '#777'
replaceText.style.fontSize = '2rem'
replaceText.innerHTML      = 'I can do <em>whatever</em> I want with JavaScript.'

const blueText = document.getElementsByClassName('blue')

for (let i = 0 ; i < blueText.length ; i++) {
  blueText[i].style.color = '#005085'
}

const openButton  = document.getElementById('open-modal')
const closeButton = document.getElementById('close-modal')
const modal       = document.getElementById('modal')

openButton.addEventListener('click', () => {
  modal.style.display = 'flex'
})

closeButton.addEventListener('click', () => {
  modal.style.display = 'none'
})

const choose = document.getElementById('texture-background')
const select = document.getElementById('texture-selector')

select.addEventListener('change', event => {
  choose.style.backgroundImage = 'url('+event.target.value+')'
})
