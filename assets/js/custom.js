// header js start
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
});
// header js end
// mobile menu js start
$(document).ready(function () {
  $(".mobile-menu-ico").click(function () {
    $(".mobile-menu-wrap").addClass("mobile-menu-wrap-show");
  });

  $(".close-ico").click(function () {
    $(".mobile-menu-wrap").removeClass("mobile-menu-wrap-show");
  });
});

$(document).mouseup(function (e) {
  var popup = $(".mobile-menu-wrap");
  if (
    !$(".mobile-menu-ico").is(e.target) &&
    !popup.is(e.target) &&
    popup.has(e.target).length == 0
  ) {
    popup.removeClass("mobile-menu-wrap-show");
  }
});
$(document).ready(function () {
  $(".list-menu .link").click(function () {
    $(".mobile-menu-wrap").removeClass("mobile-menu-wrap-show");
  });
});
// mobile menu js end
// AOS start
AOS.init();
// AOS end
// ripple effect js start
// const buttons = document.querySelectorAll(".ripple-effect-btn");
// buttons.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     let x = e.clientX - e.target.offsetLeft;
//     let y = e.clientY - e.target.offsetTop;

//     let ripples = document.createElement("span");
//     ripples.style.left = x + "px";
//     ripples.style.top = y + "px";
//     this.appendChild(ripples);

//     setTimeout(() => {
//       ripples.remove();
//     }, 1000);
//   });
// });
// ripple effect js end
// swiper js start
var swiper = new Swiper(".people-world-swiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// swiper js end
// counting number js start
$(".counter").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-countto");
  countDuration = parseInt($this.attr("data-duration"));
  $({ counter: $this.text() }).animate(
    {
      counter: countTo
    },
    {
      duration: countDuration,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.counter));
      },
      complete: function () {
        $this.text(this.counter);
      }
    }
  );
});
// counting number js end