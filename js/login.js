import $ from "jquery";
export function accessProfile(username, password) {
  $.ajax({
    url: "http://localhost:3001/sessions/create",
    type: "POST",
    data:{
          username: username,
          password: password,
        },
    async: false, 
    success: function (response) {
      localStorage.setItem("token", response.access_token);
    },
    error: function(){
      alert("Please enter valid username and password.")
    }
  });
}
