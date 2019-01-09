document.addEventListener('DOMContentLoaded', () => {
  'use strict'

  // console.log('-- main.js log --')

  const openBtn = document.querySelector('.page-btn')
  const closeBtn = document.querySelector('.page-btn-close')
  const pageNav = document.querySelector('.page-nav')

  openBtn.addEventListener('click', () => {
    console.log('btn click');
    pageNav.classList.toggle('open')
    openBtn.classList.toggle('on')
    closeBtn.classList.toggle('on')
  })

  // openBtn.addEventListener('click', () => {
  //   console.log('-- open btn --')
  //   pageNav.classList.add('open')
  //   openBtn.classList.add('on')
  //   closeBtn.classList.add('on')
  // })
  // closeBtn.addEventListener('click', () => {
  //   console.log('-- close btn --');
  //   pageNav.classList.remove('open')
  //   openBtn.classList.remove('on')
  //   closeBtn.classList.remove('on')
  // })

})