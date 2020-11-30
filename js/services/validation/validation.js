import $ from "jquery";
import { validatingUsername } from "../validation/username-validation";
import { validatingPassword } from "../validation/password-validation";
import { validatingAccount } from "../validation/account-validation"
export function validation(text){
    let username = $(".js-username").val();
    let password = $(".js-password").val();
    if (username == "") {
        validatingUsername();
      }
      if (password == "") {
        validatingPassword();
      } else {
        validatingAccount(text)
      }
}