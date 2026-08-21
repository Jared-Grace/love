import { html_attribute_set } from "./html_attribute_set.mjs";
import { list_size } from "./list_size.mjs";
export function bible_dream_stroke_ink_show(state) {
  "Show as much of a stroke's bright line as has been traced so far, by shortening the dash that was hiding it.";
  "The samples are laid down at even distances, so how far along the list a trace has got IS how far along the line it has got, and the two need no separate reckoning.";
  let last = list_size(state.samples) - 1;
  let drawn = (state.total * state.index) / last;
  let hidden = state.total - drawn;
  let hidden_text = String(hidden);
  html_attribute_set(state.ink, "stroke-dashoffset", hidden_text);
}
