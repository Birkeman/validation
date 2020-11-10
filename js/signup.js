import $ from "jquery";
export function createProfile(username, password) {
  $.post(
    "http://localhost:3001/users",
    {
      username: username,
      password: password,
    },
    function () {
      location.hash = "login";
    }
  );
}
