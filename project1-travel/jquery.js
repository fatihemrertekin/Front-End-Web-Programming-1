$(document).ready(function () {
  // Varsayılan dil
  var currentLang = "en";

  // Düğmeye tıklandığında dil değiştir
  $("#lang-tr").click(function () {
    if (currentLang === "en") {
        $("#navbar .navbar-nav .nav-item:nth-child(1) .nav-link").text("Geziler");
        $("#navbar .navbar-nav .nav-item:nth-child(2) .nav-link").text("Oteller");
        $("#navbar .navbar-nav .nav-item:nth-child(3) .nav-link").text("Otomobiller");
        $("#navbar .navbar-nav .nav-item:nth-child(4) .nav-link").text("Giriş Yap");
        $("#navbar .navbar-nav .nav-item:nth-child(5) .nav-link").text("Kaydol");
        currentLang = "tr";
    }
  });

  $("#lang-en").click(function () {
    if (currentLang === "tr") {
        $("#navbar .navbar-nav .nav-item:nth-child(1) .nav-link").text("Trips");
        $("#navbar .navbar-nav .nav-item:nth-child(2) .nav-link").text("Hotels");
        $("#navbar .navbar-nav .nav-item:nth-child(3) .nav-link").text("Transporters");
        $("#navbar .navbar-nav .nav-item:nth-child(4) .nav-link").text("Log In");
        $("#navbar .navbar-nav .nav-item:nth-child(5) .nav-link").text("Register");
        currentLang = "en";
    }
  });
});


// if (currentLang === "en") {
//   // HEADER
//   // navbar
//   $("#navbar .nav-link1").text("Anasayfa");
//   currentLang = "tr";
// } else {
//   // HEADER
//   // navbar
//   $("#navbar .nav-link1").text("Home");
//   currentLang = "en";
// }
