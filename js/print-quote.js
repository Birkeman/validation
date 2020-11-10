import $ from "jquery";
export function printQuote(result){
    $(".js-section").html("<div class='title'><span>"+result+"</span></div><div class='width'><button class='btn js-logout'>LOG OUT</button></div>")
}