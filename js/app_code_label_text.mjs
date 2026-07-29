import { html_div_text } from "./html_div_text.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function app_code_label_text(parent, label) {
  "render a question or answer label; a label always begins a line, so its first letter is capitalised here in one place rather than in each lesson's literal (a first character that is not a letter is left unchanged)";
  let capitalized = text_first_upper_to(label);
  let div = html_div_text(parent, capitalized);
  return div;
}
