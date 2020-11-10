import $ from "jquery";
export function printSignup(user, pass) {
  let signupPage = `
  <div class="title">
    <h2>SIGN UP</h2>
  </div>
  <div class="width input-div">
        <img class="icon" src="`+user+`"><input type="text" class="input js-username" placeholder="Username">
    </div>
    <div class="width input-div">
        <img class="icon" src="`+pass+`"><input type="password" class="input js-password" placeholder="Password">
    </div>
  <div class="width">
    <button class="btn js-signup">Sign Up</button>
  </div>
  <div class="width title">
    <a href="#login" class="js-get-login">Already have account?</a>
  </div>`;
  $(".js-section").html("");
  $(".js-section").html(signupPage);
}
