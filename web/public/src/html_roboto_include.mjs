import { marker } from "../../../love/public/src/marker.mjs";
import { global_function_once } from "../../../love/public/src/global_function_once.mjs";
import { html_stylesheet } from "../../../love/public/src/html_stylesheet.mjs";
export function html_roboto_include() {
  marker("1");
  const href =
    "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap";
  let fn = html_roboto_include;
  global_function_once(lambda, fn);
  function lambda() {
    html_stylesheet(href);
  }
}
