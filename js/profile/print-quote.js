import $ from "jquery";
export function printQuote(result) {
  $(".js-section").html(
    "<div class='text-center'><span>" +
      result +
      "</span></div><div class='div-width'><button class='btn js-logout'>LOG OUT</button></div>"
  );
}
