import "/css/app.scss";
import "/node_modules/@fortawesome/fontawesome-free/css/all.css";
import $ from "jquery";
import { printLogin } from "./login/print-login";
import { printSignup } from "./signup/print-signup";
import { deleteAccess } from "./services/api/auth";
import { loggingPage } from "./login/login-page";
import { signupPage } from "./signup/signup-page";
import { displayQuote } from "./profile/quote-page";
function locationHashChanged() {
  if (location.hash === "#login") {
    printLogin();
  }
  if (location.hash === "#signup") {
    printSignup();
  }
  if (location.hash === "#profile") {
    displayQuote();
  }
}

window.onhashchange = locationHashChanged;

$(document).ready(function () {
  printSignup();
  $(document).on("click", ".js-login", loggingPage);
  $(document).on("click", ".js-signup", signupPage);
  $(document).on("click", ".js-logout", deleteAccess);
});
