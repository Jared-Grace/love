import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { lyric_video_picture_lines } from "./lyric_video_picture_lines.mjs";
import { lyric_video_review_lines } from "./lyric_video_review_lines.mjs";
import { html_flex_row_gap } from "./html_flex_row_gap.mjs";
import { lyric_video_song_swap_column } from "./lyric_video_song_swap_column.mjs";
import { each } from "./each.mjs";
export function lyric_video_song_swap_card(parent, document, swap) {
  "$plain parent";
  "$plain document";
  "$plain swap";
  "One picture of a song set beside the pictures offered to take its place, under the words sung over it.";
  "THE CURRENT PICTURE COMES FIRST IN THE ROW, so before and after read left to right.";
  "THE WORDS ARE FOUND THROUGH THE DOCUMENT'S OWN PICTURE AT THAT PATH, because that entry holds the start and end the words are chosen by; a candidate has no times of its own until it is chosen.";
  arguments_assert(arguments, 3);
  let card = html_div(parent);
  html_style_assign(card, {
    "margin-top": "24px",
    "padding-top": "12px",
    "border-top": "1px solid #8888",
  });
  let before = property_get(swap, "before");
  let pictures = property_get(document, "pictures");
  let picture = list_find_property(pictures, "path", before);
  let lines = property_get(document, "lines");
  let over = lyric_video_picture_lines(lines, picture);
  lyric_video_review_lines(card, over);
  let row = html_div(card);
  html_flex_row_gap(row, "8px");
  lyric_video_song_swap_column(row, "now", before);
  let after = property_get(swap, "after");
  function candidate(offered) {
    let label = property_get(offered, "label");
    let path = property_get(offered, "path");
    lyric_video_song_swap_column(row, label, path);
  }
  each(after, candidate);
  return card;
}
