const pieCharts = document.querySelectorAll('.pie-chart');
const transitionDuration = 900;

pieCharts.forEach(pie => {
  let progress = pie.querySelector('.pie-chart__progress_fill');
  let radius = progress.r.baseVal.value;
  let circumference = 2 * Math.PI * radius;

  progress.style.setProperty('--initialStroke', circumference);
  progress.style.setProperty('--transitionDuration', `${transitionDuration}ms`);

  setTimeout(() => progress.style.strokeDashoffset = 50, 100);
});













// Анимация при скролле
// // get the element to animate
// var element = document.querySelectorAll('.donut');
// var elementHeight = element.clientHeight;

// // listen for scroll event and call animate function
// document.addEventListener('scroll', animate);

// // check if element is in view
// function inView() {
//   // get window height
//   var windowHeight = window.innerHeight;
//   // get number of pixels that the document is scrolled
//   var scrollY = window.scrollY || window.pageYOffset;

//   // get current scroll position (distance from the top of the page to the bottom of the current viewport)
//   var scrollPosition = scrollY + windowHeight;
//   // get element position (distance from the top of the page to the bottom of the element)
//   var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

//   // is scroll position greater than element position? (is element in view?)
//   if (scrollPosition > elementPosition) {
//     return true;
//   }

//   return false;
// }

// animate element when it is in view
// function animate() {
//   // is element in view?
//   if (inView()) {
//       // element is in view, add class to element
//       element.classList.add('animate');
//   }
// }
