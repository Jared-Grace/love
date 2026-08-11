import { equal } from "./equal.mjs";
export function html_loading_splash_take() {
  "take the static boot splash (the app-loading element) away once the app has loaded, and say whether there was one to take. the runtime overlay or the freshly rendered app now covers, so the instant-paint splash has done its job. a yes means the screen was already dark, so whatever replaces it should appear at once rather than fade in over a half-painted page; a no means nothing was covering, so a fade is the gentle way in";
  let id = html_loading_splash_id();
  let element = document.getElementById(id);
  if (equal(element, null)) {
    return false;
  }
  element.remove();
  return true;
}
