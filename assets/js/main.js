/**
* Template Name: Medilab
* Updated: Jun 23 2023 with Bootstrap v5.3.0
* Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /*=============== SHOW & HIDE MENU ===============*/
const toggleButton = document.getElementById('floating-toggle')

const activeMenu = () =>{
    toggleButton.classList.toggle('active')
}

toggleButton.addEventListener('click', activeMenu)

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Gallery Lightbox 
   */
  const galelryLightbox = GLightbox({
    selector: '.galelry-lightbox'
  });


  // document.addEventListener('DOMContentLoaded', function() {
  //   const form = document.getElementById('contact-form');
  //   const nameInput = document.getElementById('name');
  //   const mobileInput = document.getElementById('mobile');
  //   const countryCodeInput = document.getElementById('country-code');
  //   const submitButton = document.getElementById('submit-button');
  //   const countryCodeOutput = document.getElementById('country-code-output');

  //   nameInput.addEventListener('input', toggleSubmitButton);
  //   mobileInput.addEventListener('input', toggleSubmitButton);
  //   countryCodeInput.addEventListener('change', toggleSubmitButton);
  //   // countryCodeInput.addEventListener('change', updateCountryCodeOutput);

  //   // function updateCountryCodeOutput() {
  //   //   const countryCode = countryCodeInput.value;
  //   //   const countryCodeOutput = document.getElementById('country-code-output');
  //   //   if (countryCodeOutput) {
  //   //     countryCodeOutput.textContent = `Selected Country Code: ${countryCode}`;
  //   //   }
  //   // }

  //   function toggleSubmitButton() {
  //     const name = nameInput.value.trim();
  //     const mobile = mobileInput.value.trim();
  //     const countryCode = countryCodeInput.value;
  

  //     const isNameValid = name.length > 0;
  //     const isMobileValid = /^\d{10}$/.test(mobile);
  //     const isCountryCodeSelected = countryCode !== '';

  //     console.log(isNameValid,isMobileValid,isCountryCodeSelected)

  //     submitButton.disabled = !(isNameValid && isMobileValid && isCountryCodeSelected);
  //     // submitButton.classList.toggle('disabled', !(isNameValid && isMobileValid && isCountryCodeSelected));
  //   }

  //   // function updateCountryCodeOutput() {
  //   //   const countryCode = countryCodeInput.value;
  //   //   countryCodeOutput.textContent = `Selected Country Code: ${countryCode}`;
  //   // }

  //   form.addEventListener('submit', function(event) {
  //     event.preventDefault();

  //     console.log(
  //     'button clicked'
  //     )

  //     const messageInput = document.querySelector('textarea[name="message"]')
  //     const name = nameInput.value.trim();
  //     const mobile = mobileInput.value.trim();
  //     const countryCode = countryCodeInput.value;
  //     const message = messageInput.value.trim();

  //     const formData = {
  //       name: name,
  //       mobile: countryCode + mobile,
  //       message: message
  //     };

  //     console.log(formData);

  //     form.reset();
  //   });
  // });
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const mobileInput = document.getElementById('mobile');
    const countryCodeInput = document.getElementById('country-code');
    const pincodeInput = document.getElementById('pincode');
    const submitButton = document.getElementById('submit-button');
    const countryCodeOutput = document.getElementById('country-code-output');
    const messageInput = document.querySelector('textarea[name="message"]');
  
    nameInput.addEventListener('input', toggleSubmitButton);
    mobileInput.addEventListener('input', toggleSubmitButton);
    countryCodeInput.addEventListener('change', toggleSubmitButton);
    pincodeInput.addEventListener('input', toggleSubmitButton);
  
    function toggleSubmitButton() {
      const name = nameInput.value.trim();
      const mobile = mobileInput.value.trim();
      const countryCode = countryCodeInput.value;
      const pincode = pincodeInput.value.trim();
  
      const isNameValid = name.length > 0;
      const isMobileValid = /^\d{10}$/.test(mobile);
      const isCountryCodeSelected = countryCode !== '';
      const isPincodeValid = /^[1-9]\d{5}$/.test(pincode);
  
      submitButton.disabled = !(isNameValid && isMobileValid && isCountryCodeSelected && isPincodeValid);
    }
  
    function updateCountryCodeOutput() {
      const countryCode = countryCodeInput.value;
      if (countryCodeOutput) {
        countryCodeOutput.textContent = `Selected Country Code: ${countryCode}`;
      }
    }
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = nameInput.value.trim();
      const mobile = mobileInput.value.trim();
      const countryCode = countryCodeInput.value;
      const pincode = pincodeInput.value.trim();
      const district = document.getElementById('district').value.trim();
      const message = messageInput.value.trim();
  
      const formData = {
        name: name,
        mobile: countryCode + mobile,
        pincode: pincode,
        district: district,
        message: message
      };
  
      console.log(formData);
  
      form.reset();
    });
  });
  

  

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()