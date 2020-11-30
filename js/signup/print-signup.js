import $ from "jquery";
export function printSignup() {
  let signupPage = `
    <div class="text-center">
      <h2>SIGN UP</h2>
    </div>
    <div class="div-width input-div js-username-div">
      <i class="icon far fa-user"></i><input type="text" class="input js-username" placeholder="Username">
    </div>
    <div class="div-width input-div js-password-div">
      <i class="icon fas fa-lock"></i><input type="password" class="input js-password" placeholder="Password">
    </div>
    <div class="div-width">
      <button class="btn js-signup">Sign Up</button>
    </div>
    <div class="div-width text-center">
      <a href="#login" class="js-get-login">Already have account?</a>
    </div>`;
  $(".js-section").html("");
  $(".js-section").html(signupPage);
  location.hash = "signup";
}
