// product size functionality
const sizes = document.querySelectorAll('.main-product-size')
const sizeContainer = document.querySelector('.main-product-sizes')

sizeContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.main-product-size')

    if(!clicked) return

    sizes.forEach(s => s.classList.remove('product-size-active'))
    clicked.classList.add('product-size-active')
})

// product description tabs functionality
const tabs = document.querySelectorAll('.operations-tab')
const tabsContainer = document.querySelector('.product-description-tabs')
const tabsContent = document.querySelectorAll('.operations-content')

tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.operations-tab')
    // console.log(clicked)

    // Guard clause
    if(!clicked) return 

    //  Remove active classes
    tabs.forEach(t => t.classList.remove('operations-tab-active'))
    tabsContent.forEach(c => c.classList.remove('operations-content-active'))
    
    // Active tab
    clicked.classList.add('operations-tab-active')

    // Active content area
    document.querySelector(`.operations-content-${clicked.dataset.tab}`).
    classList.add('operations-content-active')
})

// navbar functionality
const body = document.body

let lastScroll = 0

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
        body.classList.remove('scroll-up')
    }

    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
    }

    if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
    }

    lastScroll = currentScroll
})

// mobile menu functionality
const hamburgerButton = document.getElementById('menu-btn')
const hamburgerLines = document.querySelectorAll('.hamburger-line')
const mobileMenu = document.getElementById('mobile-menu')



hamburgerButton.addEventListener('click', navToggle)

function navToggle() {
    hamburgerButton.classList.toggle('open')
    hamburgerLines.forEach(e => e.classList.toggle('dark-mode'))
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('hidden')
}

// product quantity functionality
const minus = document.querySelector(".main-product-quantity .minus")
const plus = document.querySelector(".main-product-quantity .plus")
const productQuantityValue = document.querySelector(".main-product-quantity-value")

minus.addEventListener('click', function() {
    if (productQuantityValue.value > 1 ) {
        productQuantityValue.value--
    }
})

plus.addEventListener('click', function() {
    if (productQuantityValue.value < 5 ) {
        productQuantityValue.value++
    }
})

// go to top button functionality
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}