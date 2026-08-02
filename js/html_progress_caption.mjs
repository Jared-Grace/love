import { arguments_assert } from "./arguments_assert.mjs";
import { add_1 } from "./add_1.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { html_progress_caption_font_size } from "./html_progress_caption_font_size.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
export function html_progress_caption(root, count, total, name) {
  arguments_assert(arguments, 4);
  ("The small line under a progress bar that reads '<Name> N out of M'.");
  ("The count given is how many are finished, and the line names the one being");
  ("worked on, so it counts one further.");
  ("A bar's colours belong to the app that draws it, but this line does not - it");
  ("is the same words, the same capital letter and the same small type wherever a");
  ("bar appears, so it is written once here and every bar calls it.");
  let a = add_1(count);
  let s = text_combine_multiple([name, " ", a, " out of ", total]);
  let caption = text_first_upper_to(s);
  let text_div = html_div_text_centered(root, caption);
  let value = html_progress_caption_font_size();
  html_style_font_size(text_div, value);
  return text_div;
}
