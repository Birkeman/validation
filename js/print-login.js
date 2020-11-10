import $ from "jquery";
export function printLogin(user, pass) {
  let loginPage = `
    <div class="title">
        <h2>LOG IN</h2>
    </div>
    <div class="width input-div">
        <img class="icon" src="`+user+`"><input type="text" class="input js-username" placeholder="Username">
    </div>
    <div class="width input-div">
        <img class="icon" src="`+pass+`"><input type="password" class="input js-password" placeholder="Password">
    </div>
    <div class="width">
        <button class="btn js-login">Log In</button>
    </div>
    <div class="width title">
        <a href="#signup" class="js-get-signup">Don't have account?</a>
    </div>

`;
  $(".js-section").html("");
  $(".js-section").html(loginPage);
}
