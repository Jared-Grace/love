import { html_text_set } from "./html_text_set.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function app_code_label_text_set(div, label) {
  "say something new in a label that has already been drawn, capitalised the same way the label was capitalised when it was made";
  "The capitalising lives here rather than at each caller for the same reason it lives in the drawing: a label always begins a line, and a lesson writing one should be writing what it says and not where the capitals go.";
  "Split out of the drawing rather than written beside it, so a label cannot be made one way and changed another - the two would drift the day either was touched.";
  let empty = text_empty_is(label);
  if (empty) {
    "asked to say nothing, the words already standing here are kept and made invisible rather than taken away - a line with nothing in it has no height, so emptying the label would pull everything under it up by a line at the very moment the learner is looking at that part of the screen";
    html_visibility_hidden(div);
    return;
  }
  let capitalized = text_first_upper_to(label);
  html_text_set(div, capitalized);
  "and back into sight, because a label that was told to say nothing once may be told something again - a lesson whose asking changes as its steps go asks that of this very function"
  html_visibility_visible(div);
}
