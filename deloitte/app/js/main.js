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
function ShowHideDiv(btnPassport) {
  var dvPassport = document.getElementById("dvPassport");
  if (btnPassport.value == "Yes") {
      dvPassport.style.display = "block";
      btnPassport.value = "No";
  } else {
      dvPassport.style.display = "none";
      btnPassport.value = "Yes";
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

