import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_button_biblehub_open } from "./html_button_biblehub_open.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
export function html_buttons_biblehub_verse_group(
  parent,
  book_name,
  chapter_name,
  verse_list,
  label,
  folder,
  ending,
) {
  "one biblehub link kind (commentary / parallel / interlinear) for a passage. For a SINGLE verse: one button captioned <label>. For a MULTI-verse passage: its OWN container holding a <label>: caption and one bare verse-number button per verse — because a single button reaches only the first verse of the group";
  let multi = greater_than_equal(verse_list.length, 2);
  if (not(multi)) {
    html_button_biblehub_open(
      parent,
      book_name,
      chapter_name,
      verse_list[0],
      label,
      folder,
      ending,
    );
    return;
  }
  let row = html_div(parent);
  html_centered(row);
  let caption = html_span_text(row, label + ":");
  app_shared_text_deemphasized(caption);
  let gap = app_shared_spaced_small_gap();
  html_style_set(caption, "margin-right", gap);
  function verse_button(verse_number) {
    html_button_biblehub_open(
      row,
      book_name,
      chapter_name,
      verse_number,
      verse_number,
      folder,
      ending,
    );
  }
  verse_list.forEach(verse_button);
}
