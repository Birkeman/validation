import $ from "jquery";
import { printLogin } from "../login/print-login";
import { createProfile } from "../services/api/auth";
import { validation } from "../services/validation/validation";
export function signupPage() {
  let username = $(".js-username").val();
  let password = $(".js-password").val();
  createProfile(username, password, printLogin, validation);
}
