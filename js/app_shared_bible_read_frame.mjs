import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_mobile_default_font_size } from "./app_shared_mobile_default_font_size.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_margin_0 } from "./html_margin_0.mjs";
import { app_shared_bar_content_root } from "./app_shared_bar_content_root.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { html_flex_column_gap } from "./html_flex_column_gap.mjs";
import { html_button_copy_text } from "./html_button_copy_text.mjs";
import { app_shared_bible_chosen_max } from "./app_shared_bible_chosen_max.mjs";
import { number_to_words } from "./number_to_words.mjs";
import { text_pad_space_quote_double } from "./text_pad_space_quote_double.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_bible_read_frame(context) {
  arguments_assert(arguments, 1);
  let root = app_shared_mobile_default_font_size(context);
  ("clear first so this reader can re-render in place (mode switch) instead of only on a fresh page load");
  html_clear(root);
  html_margin_0(root);
  let bc = app_shared_bar_content_root(root);
  let shell = property_get(bc, "shell");
  let content = property_get(bc, "content");
  app_shared_content_column_pad(content);
  html_flex_column_gap(content, "0");
  let bar = property_get(bc, "bar");
  let t = html_button_copy_text();
  let max = app_shared_bible_chosen_max();
  let v = number_to_words(max);
  let padded = text_pad_space_quote_double(t);
  let help_text = text_combine_multiple([
    "Tap up to ",
    v,
    " verse numbers, then ",
    padded,
    " to save that passage",
  ]);
  let r = {
    shell,
    content,
    bar,
    t,
    max,
    help_text,
  };
  return r;
}
