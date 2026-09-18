import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_picture_lines } from "./lyric_video_picture_lines.mjs";
import { lyric_video_review_lines } from "./lyric_video_review_lines.mjs";
import { html_flex_row_gap } from "./html_flex_row_gap.mjs";
import { list_includes } from "./list_includes.mjs";
import { lyric_video_song_swap_column_mark } from "./lyric_video_song_swap_column_mark.mjs";
import { lyric_video_song_swap_column } from "./lyric_video_song_swap_column.mjs";
import { fn_name } from "./fn_name.mjs";
import { api_read } from "./api_read.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function lyric_video_song_swap_card(parent, document, swap, name) {
  "$plain parent";
  "$plain document";
  "$plain swap";
  "$plain name";
  "One picture of a song set beside the pictures offered to take its place, under the words sung over it.";
  "THE CURRENT PICTURE COMES FIRST IN THE ROW, so before and after read left to right.";
  "THE WORDS ARE FOUND THROUGH THE DOCUMENT'S OWN PICTURE AT THAT PATH, because that entry holds the start and end the words are chosen by; a candidate has no times of its own until it is chosen.";
  "A PRESS ON ANY PICTURE CHOOSES IT, AND A SECOND PRESS UNCHOOSES IT. Any number may be chosen, the current one included, and the choice is written to disk at once, so nothing is lost by closing the page.";
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
  let picture = list_find_property_or_null(pictures, "path", before);
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
  let row = html_div(card);
  html_flex_row_gap(row, "8px");
  let columns = [];
  function marks(chosen) {
    for (let entry of columns) {
      let chosen_is = list_includes(chosen, entry.path);
      lyric_video_song_swap_column_mark(entry.column, chosen_is);
    }
  }
  function offer(label, path) {
    let column = lyric_video_song_swap_column(row, label, path);
    async function press() {
      let f_toggle = fn_name("lyric_video_song_swap_toggle");
      let chosen = await api_read(f_toggle, [name, before, path]);
      marks(chosen);
    }
    html_on_click(column, press);
    list_add(columns, {
      column,
      path,
    });
  }
  offer("now", before);
  let after = property_get(swap, "after");
  function candidate(offered) {
    let label = property_get(offered, "label");
    let path = property_get(offered, "path");
    offer(label, path);
  }
  each(after, candidate);
  let chosen_before = property_get_or(swap, "chosen", []);
  marks(chosen_before);
  return card;
}
