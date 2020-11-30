import $ from "jquery";

export function validatingAccount(message) {
  $(".js-valid-info").remove();
  $(".btn").after(
    '<div class="validation-width js-valid-info"><span>' +
      message +
      "</span></div>"
  );
  $(".js-valid-info").fadeOut(3000);
}
