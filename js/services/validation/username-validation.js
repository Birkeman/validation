import $ from "jquery";

export function validatingUsername() {
  $(".js-username-info").remove();
  $(".js-username-div").after(
    '<div class="validation-width js-username-info"><span>Enter valid username!</span></div>'
  );
  $(".js-username-info").fadeOut(3000);
}
