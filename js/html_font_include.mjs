import { html_stylesheet } from "./html_stylesheet.mjs";
import { global_function_once } from "./global_function_once.mjs";
export function html_font_include(fn, href) {
  global_function_once(fn, lambda);
  function lambda() {
    html_stylesheet(href);
  }
}
