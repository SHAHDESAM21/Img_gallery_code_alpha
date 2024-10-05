closelist()
function openlist() {
        $("#list").css("width","250px");
        $("#inter").css("padding-left", "250px");
}
function closelist() {
    console.log("hiii")
    $("#list").css("width","-50px");
    $("#inter").css("padding-left", "0px");
}

$("h3").click(function(){
    $("p").slideUp(300)
    $(this).next().slideDown(300)
})


function imgShow(nume) {
  const container = document.getElementById("container");
  let hasala = "";
  for (let i = 1; i < nume; i++) {
    hasala += `<div class=" col-md-4 col-sm-5 mb-4 position-relative">
                <img src="Imges/${i}.jpg" alt="this is bottle" class="img-fluid">
                </div>`;
  }
  container.innerHTML = hasala;
}
imgShow(13);

var allImags = document.querySelectorAll("img"); // 6 NodeList
allImags = Array.from(allImags); // 6 Array

var currentIndex;

var parentLayerVar = document.querySelector(".parentLayer");
var childVar = document.querySelector(".childLayer");
var closeIcon = document.querySelector(".fa-times");
var next = document.querySelector(".fa-arrow-circle-right");
var prev = document.querySelector(".fa-arrow-circle-left");

//====================== show ============================

for (var i = 0; i < allImags.length; i++) {
  allImags[i].addEventListener("click", showParentLayer);
}

function showParentLayer(eInfo) {
  currentIndex = allImags.indexOf(eInfo.target);

  var imgSrc = eInfo.target.src;
  childVar.style.cssText = `background-image : url('${imgSrc}')`;
  parentLayerVar.classList.replace("d-none", "d-flex");
}

//================= close ===========
closeIcon.addEventListener("click", hideParentLayer);
function hideParentLayer() {
  parentLayerVar.classList.replace("d-flex", "d-none");
}

//===================== next==========
next.addEventListener("click", getNextSlide);
function getNextSlide() {
  currentIndex++;
  if (currentIndex > allImags.length - 1) {
    currentIndex = 0;
  }

  var nextSrc = allImags[currentIndex].src;

  childVar.style.backgroundImage = `url(${nextSrc})`;
}

//===================== pervious==========
prev.addEventListener("click", getPrevSlide);
function getPrevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = allImags.length - 1;
  }

  var prevSrc = allImags[currentIndex].src;

  childVar.style.backgroundImage = `url(${prevSrc})`;
}

document.addEventListener("keypress", function (eInfo) {
  if (eInfo.key == "ArrowRight") {
    getNextSlide();
  } else if (eInfo.key == "ArrowLeft") {
    getPrevSlide();
  } else if (eInfo.key == "Escape") {
    hideParentLayer();
  }
});

document.addEventListener("click", function (eInfo) {
  if (eInfo.target == parentLayerVar) {
    hideParentLayer();
  }
});


function countdown() {
    var now = new Date();
    var eventDate = new Date(2022, 11, 25);
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTime;
    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;
    s %= 60; 
    m %= 60; 
    h %= 24;
    
    
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" +s :s;

    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";

    document.getElementById("hours").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.getElementById("minutes").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.getElementById("seconds").innerHTML = "<h3>" +s + "s" + "</h3>";

    setTimeout(countdown, 1000);
}

countdown();

$(function () {
    var max = 100;
    $("textarea").keyup(function () {
        var length = $(this).val().length;
        var characters = max - length;
        if (characters <= 0) {
            $("#counter").text("your available character finished");
        } else {
            $("#counter").text(characters);
        }
    });
});

