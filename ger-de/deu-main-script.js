//window.addEventListener('DOMContentLoaded', function() {
//    var userLang = navigator.language || navigator.userLanguage;
//    if (userLang === 'de' || userLang === 'de-DE') {
//        var popupContainer = document.getElementById('popup-container');
//        popupContainer.style.display = 'block';
//    }
//});

function closePopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'none';
}


function notGerman() {
    closePopup();
    var notification = document.getElementById("notification");
    notification.style.display = "block";
  
    setTimeout(function() {
     notification.style.display = "none";
      }, 3000);
  }


