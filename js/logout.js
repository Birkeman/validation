export function deleteAccess() {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  location.hash = "login";
}
