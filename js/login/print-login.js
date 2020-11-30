import $ from "jquery";
export function printLogin() {
  let loginPage = `
    <div class="text-center">
        <h2>LOG IN</h2>
    </div>
    <div class="div-width input-div js-username-div">
        <i class="icon far fa-user"></i><input type="text" class="input js-username" placeholder="Username">
    </div>
    <div class="div-width input-div js-password-div">
        <i class="icon fas fa-lock"></i><input type="password" class="input js-password" placeholder="Password">
    </div>
    <div class="div-width">
        <button class="btn js-login">Log In</button>
    </div>
    <div class="div-width text-center">
        <a href="#signup" class="js-get-signup">Don't have account?</a>
    </div>

`;
  $(".js-section").html("");
  $(".js-section").html(loginPage);
  location.hash = "login";
}
