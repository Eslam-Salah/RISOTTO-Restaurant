let tabs = document.querySelectorAll(".menu-content .tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".slide-menu > div");
let divsArray = Array.from(divs);

tabsArray.forEach((el) => {
  el.addEventListener("click", (e) => {
    tabsArray.forEach((ev) => {
      ev.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    divsArray.forEach((divs) => {
      divs.style.display = "none";
    });

    document.querySelector(e.currentTarget.dataset.content).style.display =
      "block";
  });
});

$(document).ready(function(){
  $(inpSize).click(function(){
    $(".change-size .note").fadeIn(500);
  })
})

let aboutSection = document.querySelector(".about");
let arrival = aboutSection.offsetTop / 2;

window.onscroll = function() {
  if (window.pageYOffset >= arrival) {
    aboutSection.classList.add("arrival")
  } else {
    aboutSection.classList.remove("arrival");
  }
};

// Add JQuery
$(document).ready(function(){
  $(".home-content h2").animate({
    "margin-top": "0px"
  },500)
  $(".home-content p").animate({
    "margin-top": "0px"
  },1000)
  $(".home-content button").animate({
    "margin-top": "0px"
  },1500)

  $(window).scroll(function(){
    if($(this).scrollTop() > 2000){
      $(".reservation form").css("opacity", "1");
    } else{
      $(".reservation form").css("opacity", "0");
    }
    if($(this).scrollTop() > 2100){
      $(".reservation .opening-time").css("opacity", "1");
    } else{
      $(".reservation .opening-time").css("opacity", "0");
    }
  })

  $(window).scroll(function(){
    if($(this).scrollTop() > 2300){
      $(".event-content").css("transform", "translateX(0)");
    } else{
      $(".event-content").css("transform", "translateX(100px)");
    }
  })

  $(window).scroll(function(){
    if($(this).scrollTop() > 3000){
      $(".contact-item").css("opacity", "1");
    } else{
      $(".contact-item").css("opacity", "0");
    }
    if($(this).scrollTop() > 3000){
      $(".contact-map").css("opacity", "1");
    } else{
      $(".contact-map").css("opacity", "0");
    }
  })
});

$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 1000){
      $(".arrow-top").fadeIn(1000);
    } else{
      $(".arrow-top").fadeOut(1000);
    }
  })
  $(".arrow-top").click(function(){
    $("html,body").animate({
      scrollTop: 0,
    })
  })
});