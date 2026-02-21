import { html_stylesheet } from "../../../love/public/src/html_stylesheet.mjs";
import { global_function_once } from "../../../love/public/src/global_function_once.mjs";
export function html_font_include(fn, href) {
  global_function_once(lambda, fn);
  function lambda() {
    html_stylesheet(href);
  }
}
