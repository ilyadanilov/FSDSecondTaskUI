"use strict";

    const buttons = document.querySelectorAll(".btn-ripple");

    function animate(e){
      console.log('click!');
      const parent = this.parentNode;

      if (parent.querySelectorAll(".ripple").length === 0) {
        const span = document.createElement("span");
        span.classList.add("ripple");
        parent.insertBefore(span, parent.firstChild);
      }

      const ripple = parent.querySelectorAll(".ripple")[0];

      ripple.classList.remove("animate");

      if (!ripple.offsetHeight && !ripple.offsetWidth) {
        const d = Math.max(parent.offsetHeight, parent.offsetWidth);
        ripple.style.height = `${d}px`;
        ripple.style.width = `${d}px`;
      }

      const rect = parent.getBoundingClientRect();

      const offset = {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      }

      const x = e.pageX - offset.left - ripple.offsetWidth / 2;
      const y = e.pageY - offset.top - ripple.offsetHeight / 2;


      ripple.style.top = `${y}px`;
      ripple.style.left = `${x}px`;
      ripple.classList.add("animate");
    };

    buttons.forEach(button => button.addEventListener("click", animate));
