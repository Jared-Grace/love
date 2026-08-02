import { add_1 } from "./add_1.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { html_progress_caption_font_size } from "./html_progress_caption_font_size.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
export function probe_fold_helper(root, count, total, name) {
  let a = add_1(count);
  let s = text_combine_multiple([name, " ", a, " out of ", total]);
  let caption = text_first_upper_to(s);
  let text_div = html_div_text_centered(root, caption);
  let value = html_progress_caption_font_size();
  html_style_font_size(text_div, value);
  return text_div;
}
