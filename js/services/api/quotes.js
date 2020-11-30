import $ from "jquery";
import {route} from "./routes"
import { header} from "./token"
export function getQuote(printQuote) {
  $.ajax({
    url: route + "/api/protected/random-quote",
    type: "GET",
    async: false, 
    headers: header,
    success: function (response) {
      printQuote(response)
    },
    error: function(){
      return
    }
  });
}
