import $ from "jquery";

import { accessProfile } from "../services/api/auth";
import {locationHashChanged} from "../change-hash"
import {validation} from "../services/validation/validation"
export function loggingPage() {
  let username = $(".js-username").val();
  let password = $(".js-password").val();
  let errorMessage = "Please enter valid data!"
  accessProfile(username, password, locationHashChanged,"profile", validation(errorMessage));
}
