import $ from "jquery";
import { route } from "./routes";
export function accessProfile(username, password, callback, par1, error) {
  $.ajax({
    url: route + "/sessions/create",
    type: "POST",
    data: {
      username: username,
      password: password,
    },
    async: false,
    success: function (response) {
      localStorage.setItem("token", response.access_token);
      callback(par1)
    },
    error: function () {
      error
    },
  });
}
export function deleteAccess() {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  location.hash = "login";
}

export function createProfile(username, password, callback, error) {
  $.post(
    route + "/users",
    {
      username: username,
      password: password,
    },
  )
  .done(function(){
    callback()
  })
  .fail(function(){
    error()
  });
}
