import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { property_get } from "./property_get.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { song_image_text_quiet_line } from "./song_image_text_quiet_line.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { song_image_couplet_lines } from "./song_image_couplet_lines.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { picture_swap_row } from "./picture_swap_row.mjs";
import { song_image_couplet_kept } from "./song_image_couplet_kept.mjs";
import { song_image_review_notes } from "./song_image_review_notes.mjs";
export function song_image_brighter_card(parent, swap, name) {
  "$plain parent";
  "$plain swap";
  "$plain name";
  "One couplet of the hymn on the brighter page: which couplet it is, the two lines it is sung to, its published picture beside the brighter copy, and the box for saying what is still wrong with it.";
  "THE ROW OF PICTURES IS THE ONE A SONG'S BACKGROUNDS ARE CHOSEN IN, so a press accepts a picture and a green frame says it was accepted, the same as there. Either picture may be accepted - the brighter one, or the one already published, which is how a reader says this one was bright enough already.";
  "THE BOX IS THE ONE THE HYMN'S REVIEW PAGE FILES ITS NOTES IN, KEYED BY THE SAME COUPLET, so a note left here stands beside the ones left there and a later round of drawing meets all of them together.";
  arguments_assert(arguments, 3);
  let card = html_div(parent);
  html_style_assign(card, {
    "margin-top": "24px",
    "padding-top": "12px",
    "border-top": "1px solid #8888",
  });
  let n = property_get(swap, "n");
  let couplet = song_image_couplet_get(n);
  let key = song_image_couplet_key(n);
  let head = song_image_text_quiet_line(card);
  let numbers = text_combine_multiple([
    "verse ",
    couplet.verse,
    " · couplet ",
    n,
    " · drawing ",
    key,
  ]);
  html_text_set(head, numbers);
  song_image_couplet_lines(card, couplet);
  let row_holder = html_div(card);
  html_style_margin_top(row_holder, "10px");
  picture_swap_row(row_holder, swap, name);
  function attempt_get() {
    let kept = song_image_couplet_kept(n);
    return kept;
  }
  song_image_review_notes(card, key, attempt_get);
  return card;
}
