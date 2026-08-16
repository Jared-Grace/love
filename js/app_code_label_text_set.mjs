import { html_text_set } from "./html_text_set.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function app_code_label_text_set(div, label) {
  "say something new in a label that has already been drawn, capitalised the same way the label was capitalised when it was made";
  "The capitalising lives here rather than at each caller for the same reason it lives in the drawing: a label always begins a line, and a lesson writing one should be writing what it says and not where the capitals go.";
  "Split out of the drawing rather than written beside it, so a label cannot be made one way and changed another - the two would drift the day either was touched.";
  let capitalized = text_first_upper_to(label);
  html_text_set(div, capitalized);
}
