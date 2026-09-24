import { picture_swap_row } from "./picture_swap_row.mjs";
import { lyric_video_song_swap_picture_or_null } from "./lyric_video_song_swap_picture_or_null.mjs";
import { lyric_video_review_notes } from "./lyric_video_review_notes.mjs";
import { null_is } from "./null_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_picture_lines } from "./lyric_video_picture_lines.mjs";
import { lyric_video_review_lines } from "./lyric_video_review_lines.mjs";
export function lyric_video_song_swap_card(parent, document, swap, name) {
  "$plain parent";
  "$plain document";
  "$plain swap";
  "$plain name";
  "One picture of a song set beside the pictures offered to take its place, under the words sung over it.";
  "THE CURRENT PICTURE COMES FIRST IN THE ROW, so before and after read left to right.";
  "THE BOX AT THE FOOT IS THE ONE THE REVIEW SCREEN USES, KEYED BY THE SAME PICTURE, so a note left here and a note left there are the same note rather than two that have to be gathered up later. Choosing says which picture is wanted; only the box can say why, and a choice with no reason kept beside it is the one that gets argued through again from the start.";
  "THE WORDS ARE FOUND THROUGH THE DOCUMENT'S OWN PICTURE AT THAT PATH, because that entry holds the start and end the words are chosen by; a candidate has no times of its own until it is chosen.";
  "THE APPROVE BUTTON UNDER ANY PICTURE CHOOSES IT, AND A SECOND PRESS UNCHOOSES IT. Any number may be chosen, the current one included, and the choice is written to disk at once, so nothing is lost by closing the page.";
  "THE FRAMES ARE DRAWN FROM WHAT THE DISK ANSWERS, never from what the press assumed, so a frame on screen is a choice that was really kept.";
  "A PICTURE THE SONG NO LONGER HAS SAYS SO, AND THE CARDS AFTER IT STILL DRAW. A swap list outlives the document it was written against: choose a candidate, point the document at that picture, and the path this card names is gone. Insisting on it threw, and one throw inside the loop took every later card with it, so the whole screen went blank rather than showing the cards that were still good.";
  arguments_assert(arguments, 4);
  let card = html_div(parent);
  html_style_assign(card, {
    "margin-top": "24px",
    "padding-top": "12px",
    "border-top": "1px solid #8888",
  });
  let before = property_get(swap, "before");
  let pictures = property_get(document, "pictures");
  let picture = lyric_video_song_swap_picture_or_null(pictures, before);
  let gone = null_is(picture);
  if (gone) {
    let said = text_combine_multiple([
      "the song no longer has a picture at ",
      before,
    ]);
    app_shared_text_quiet(card, said);
    return card;
  }
  let lines = property_get(document, "lines");
  let over = lyric_video_picture_lines(lines, picture);
  lyric_video_review_lines(card, over);
  picture_swap_row(card, swap, name);
  lyric_video_review_notes(card, picture);
  return card;
}
