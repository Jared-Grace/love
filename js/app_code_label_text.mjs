import { html_div } from "./html_div.mjs";
import { app_code_label_text_set } from "./app_code_label_text_set.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_label_text(parent, label) {
  "render a question or answer label; a label always begins a line, so its first letter is capitalised here in one place rather than in each lesson's literal (a first character that is not a letter is left unchanged)";
  "coloured apart from the writing it introduces, in one place rather than at each label, because a label names what follows it rather than saying anything itself - a learner scanning for the code should be able to pass over the word Code";
  "The deep blue of the containers these labels sit on, so the difference reads as the same blue said quietly rather than as a second colour brought in.";
  let div = html_div(parent);
  app_code_label_text_set(div, label);
  let color = app_shared_color_blue_dark();
  html_font_color_set(div, color);
  return div;
}
