import { global_function_initialize_lambda } from "../../../love/public/src/global_function_initialize_lambda.mjs";
import { html_jetbrains_mono_include } from "../../../love/public/src/html_jetbrains_mono_include.mjs";
import { html_font_set } from "../../../love/public/src/html_font_set.mjs";
export function html_font_jetbrains_mono(div) {
  function lambda2() {
    html_jetbrains_mono_include();
    let v = true;
    return v;
  }
  let value = global_function_initialize_lambda(fn, lambda2);
  html_font_set(div, '"JetBrains Mono", monospace');
}
