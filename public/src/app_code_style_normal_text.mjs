import { html_style_code_unfonted } from "../../../love/public/src/html_style_code_unfonted.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
export function app_code_style_normal_text(container, answer) {
  let answer_div = html_div_text(container, answer);
  html_style_code_unfonted(answer_div, "white", "black");
}
