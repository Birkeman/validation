import "/css/main.scss";
import $ from "jquery";
import { createProfile } from "./signup";
import { accessProfile } from "./login";
import { deleteAccess } from "./logout";
import { printLogin } from "./print-login";
import { printSignup } from "./print-signup";
import { printQuote } from "./print-quote";
import { getQuote } from "./get-quote";
let user = $(".js-user").attr("src");
let pass = $(".js-pass").attr("src");
function locationHashChanged() {
  if (location.hash === "#login") {
    printLogin(user, pass);
  }
  if (location.hash === "#signup") {
    printSignup(user, pass);
  }
}

window.onhashchange = locationHashChanged;

$(document).ready(function () {
  location.hash = "signup";

  $(document).on("click", ".js-login", function () {
    let username = $(".js-username").val();
    let password = $(".js-password").val();
    accessProfile(username, password);
    let token = localStorage.getItem("token");
    getQuote(token, printQuote);
  });

  $(document).on("click", ".js-signup", function () {
    let username = $(".js-username").val();
    let password = $(".js-password").val();
    createProfile(username, password);
  });

  $(document).on("click", ".js-logout", function () {
    deleteAccess();
  });
});
