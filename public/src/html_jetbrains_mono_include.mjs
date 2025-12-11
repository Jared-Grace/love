import { global_function_initialize_lambda } from "../../../love/public/src/global_function_initialize_lambda.mjs";
import { html_stylesheet } from "../../../love/public/src/html_stylesheet.mjs";
export function html_jetbrains_mono_include() {
  function lambda2() {
    fn();
    let v = true;
    return v;
  }
  global_function_initialize_lambda(html_jetbrains_mono_include, lambda2);
  function fn() {
    const href =
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap";
    html_stylesheet(href);
  }
}
