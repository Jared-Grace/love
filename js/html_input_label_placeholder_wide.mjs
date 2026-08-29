import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_input_placeholder_wide } from "./html_input_placeholder_wide.mjs";
export function html_input_label_placeholder_wide(parent, label, placeholder) {
  "$plain parent";
  "$plain label";
  "$plain placeholder";
  "A wide box to type in with a line of words standing over it saying what it is for, and greyed words inside it saying the same until something is typed.";
  "THE WORDS ARE WRITTEN TWICE ON PURPOSE. A placeholder alone vanishes the moment anything is typed, so a box that has been filled in says nothing at all about what its contents mean - and a screen that arrives already filled in is in that state from the first moment it is looked at, which is the moment a person is trying to work out what they are reading.";
  "The label sits above rather than beside because the box is wide. A word to the left of a full width box either shrinks the box or wraps under it at the first narrow screen, and this is read on a phone.";
  let column = html_div(parent);
  html_div_text(column, label);
  let input = html_input_placeholder_wide(column, placeholder);
  return input;
}
