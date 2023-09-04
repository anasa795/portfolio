let section = document.querySelectorAll('.section')
let sectionx = document.querySelectorAll('.sectionx')
const options = {
  root: null,
  rootMargin: '0px 0px -100px 0px',
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((el) => {
    el.target.classList.toggle('animation-section', el.isIntersecting)
    if (el.isIntersecting) {
      observer.unobserve(el.target)
    }
  })
}, options)

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((el) => {
    el.target.classList.toggle('animation-sectionx', el.isIntersecting)
    if (el.isIntersecting) {
      observer2.unobserve(el.target)
    }
  })
}, options)

section.forEach((element) => {
  observer.observe(element)
})

sectionx.forEach((element) => {
  observer2.observe(element)
})

/********************************************* */

const slideCount = document.querySelector('.slideCount')
let count = 1

function prevf() {
  count--
  if (count < 1) {
    count = 3
  }
  slideCount.innerHTML = `${count} `
  console.log(count)
}
function nextf() {
  count++
  if (count > 3) {
    count = 1
  }
  slideCount.innerHTML = `${count} `
  console.log(count)
}

/********************************* */

const colorArray = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#809980',
]
const btnChangeColor = document.querySelectorAll('.btnc')

for (let i = 0; i < btnChangeColor.length; i++) {
  btnChangeColor[i].style.backgroundColor = colorArray[i]
  btnChangeColor[i].addEventListener('click', (e) => {
    document.documentElement.style.setProperty('--main-color', colorArray[i])
  })
}
