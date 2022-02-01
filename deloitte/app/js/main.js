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
  if (notification.value == "Yes") {
      reminderblock.style.display = "none";
      dark.style.marginRight = "1.1rem";
      addform.style.display ="block"
      notification.value = "No";
  } else {
      reminderblock.style.display = "block";
      dark.style.marginRight = "16.5rem";
      addform.style.display ="none"
      notification.value = "Yes";
  }
}
function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
}


function openForm() {
  document.getElementById("popupForm").style.display = "block";

}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

function opencard() {
  document.getElementById("sub-card").style.visibility= "visible";

}
function closecard() {
  document.getElementById("sub-card").style.visibility = "hidden";
}

