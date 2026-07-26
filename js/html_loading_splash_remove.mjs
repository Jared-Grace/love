export function html_loading_splash_remove() {
  "remove the static boot splash (the app-loading element) once the app has loaded; the runtime overlay or the freshly rendered app now covers, so the instant-paint splash has done its job. no-op if it is absent (already gone, or a context without it)";
  let element = document.getElementById("app-loading");
  if (element === null) {
    return;
  }
  element.remove();
}
