(function () {
    'use strict'
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })()
  $(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.aside').toggleClass('active');
    });

});
function ShowHideDiv(notification) {
  var reminderblock = document.getElementById("reminderblock");
  var dark = document.getElementById("dark");
  var addform = document.getElementById("addform");
  var mq = window.matchMedia( "(max-width: 767px)" );
  var ipadsize = window.matchMedia( "(max-width: 991px)" );
  if (notification.value == "Yes") {
      reminderblock.style.display = "none";
      dark.style.marginRight = "0rem";
      addform.style.display ="block"
      notification.value = "No";
  } else {
      reminderblock.style.display = "flex";
      dark.style.marginRight = "16.5rem";
      addform.style.display ="none"
      notification.value = "Yes";
  }
  if (ipadsize.matches) {
    dark.style.marginRight = "18rem";

  }
  else {
    dark.style.marginRight = "0rem";
  }
  if (mq.matches) {
    dark.style.marginRight = "0.5rem";

  }
  else {
    // dark.style.marginRight = "13.5rem";
    // dark.style.dis = "";
  }
}

var mq = window.matchMedia( "(max-width: 767px)" );
if (mq.matches) {
  dark.style.marginRight = "0.5rem";
}
else {
  // dark.style.marginRight = "13.5rem";
}
// const container = document.getElementById("dark")
// media()

// function media() {
// 	let small = window.matchMedia("(max-width: 767px)").matches
  
//   if (small) {
//     dark.style.display = "flex";
  
//   } else {
//     dark.style.display = "flex";
//   }
// }

// window.matchMedia("(max-width: 600px)").addListener(media)



// const ShowHideDiv = () => {
//   let dark = window.matchMedia( ' ( max-width: 767px ) ' )
//   if( dark.matches ){
//     document.querySelector( '#dark' ).style.marginRight = '0'
//     }else{
//       document.querySelector( '#dark' ).style.marginRight = '16.5rem'}
    
//   }

function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
}
function opencard() {
  document.getElementById("sub-card").style.visibility= "visible";

}
function closecard() {
  document.getElementById("sub-card").style.visibility = "hidden";
}

function openForm(popupform) {
  var popupForm = document.getElementById("popupForm");
  var dark = document.getElementById("dark");
  var addform = document.getElementById("addform");
  var notification = document.getElementById("notification");
  var workplace = document.getElementById("workplace");
  if (popupform.value == "Yes") {
      popupForm.style.display = "block";
      dark.style.display = "none";
      addform.style.display ="none"
      notification.style.display ="none"
      workplace.style.display ="none"
      popupform.value = "No";
  } else {
      popupForm.style.display = "block";
      dark.style.display = "none";
      addform.style.display ="none"
      notification.style.display ="none"
      workplace.style.display ="none"
      popupform.value = "Yes";
  }
}
function closeForm(popupform) {
  var popupForm = document.getElementById("popupForm");
  var dark = document.getElementById("dark");
  var addform = document.getElementById("addform");
  var notification = document.getElementById("notification");
  var workplace = document.getElementById("workplace");
  if (popupform.value == "Yes") {
      popupForm.style.display = "none";
      dark.style.display = "flex";
      addform.style.display ="block"
      notification.style.display ="block"
      workplace.style.display ="block"
      popupform.value = "No";
  } else {
      popupForm.style.display = "none";
      dark.style.display = "flex";
      addform.style.display ="block"
      notification.style.display ="block"
      workplace.style.display ="block"
      popupform.value = "Yes";
  }
}

function changeText()
{
var id=document.getElementsByName("button")[0].id;
if(id==1)
{
document.getElementById("text").innerHTML = "Light";
document.getElementsByName("button")[0].id=0;    
}
else
{
document.getElementById("text").innerHTML = "Dark";  
document.getElementsByName("button")[0].id=1;  
}
}