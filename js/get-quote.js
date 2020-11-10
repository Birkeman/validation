import $ from "jquery";
export function getQuote(token, printQuote) {
  $.ajax({
    url: "http://localhost:3001/api/protected/random-quote",
    type: "GET",
    async: false, 
    headers: { Authorization: "Bearer " + token },
    success: function (response) {
      location.hash = "profile";
      printQuote(response)
    },
    error: function(){
      return
    }
  });
}
