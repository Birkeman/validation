import $ from "jquery";

export function validatingPassword() {
  $(".js-password-info").remove();
  $(".js-password-div").after(
    '<div class="validation-width js-password-info"><span>Enter valid password!</span></div>'
  );
  $(".js-password-info").fadeOut(3000);
}
