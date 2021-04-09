// Your code goes here
const logoHeading = document.querySelector('.logo-heading')
logoHeading.addEventListener('mouseover', function () {
  logoHeading.style.color = 'red'
})
logoHeading.addEventListener('mouseout', function () {
  logoHeading.style.color = 'purple'
})

const body = document.querySelector('body')
body.addEventListener('keydown', function () {
  body.style.backgroundColor = 'pink'
})
body.addEventListener('keyup', function () {
  body.style.backgroundColor = 'gray'
})

const header = document.querySelector('header')
header.addEventListener('mousedown', function () {
  header.style.backgroundColor = 'blue'
})

const btn = document.querySelectorAll('.btn')
console.log(btn)
const btnArray = Array.from(btn)
console.log(btnArray)

btnArray.forEach(function (item) {
  item.addEventListener('click', function () {
    alert('Lets sign you up!!!')
  })
})

window.addEventListener('scroll', function () {
  body.style.backgroundColor = 'orange'
})

//! - see Colt's lecture 155
const firstNav = document.querySelectorAll('.nav-link')
const firstNavArray = Array.from(firstNav)

firstNavArray.forEach(function (item) {
  item.addEventListener('mouseover', function () {
    console.log('moused over me')
    const height = Math.floor(Math.random() * window.innerHeight)
    const width = Math.floor(Math.random() * window.innerWidth)
    item.style.position = 'absolute'
    item.style.left = `${width}px`
    item.style.top = `${height}px`
    item.style.backgroundColor = 'gray'
  })
})
