import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_flex_row_gap } from "./html_flex_row_gap.mjs";
import { list_includes } from "./list_includes.mjs";
import { lyric_video_song_swap_column_mark } from "./lyric_video_song_swap_column_mark.mjs";
import { lyric_video_song_swap_column } from "./lyric_video_song_swap_column.mjs";
import { api_read } from "./api_read.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { list_add } from "./list_add.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
export function picture_swap_row(parent, swap, name) {
  "$plain parent";
  "$plain swap";
  "$plain name";
  "A row of pictures to choose among - the picture now in place first, then each one offered for its place - where a press on any of them chooses it and a second press unchooses it, the choice kept in the offer file called name.";
  "IT IS ITS OWN UNIT SO THAT EVERY PAGE COMPARING A PICTURE WITH ITS REPLACEMENTS CHOOSES THE SAME WAY. A song's backgrounds and a hymn's brightened drawings are both a before beside some afters, and a green frame that meant chosen on one page and something else on the other would have to be learnt twice.";
  "THE FRAMES ARE DRAWN FROM WHAT THE DISK ANSWERS, never from what the press assumed, so a frame on screen is a choice that was really kept.";
  arguments_assert(arguments, 3);
  let before = property_get(swap, "before");
  let row = html_div(parent);
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
      let chosen = await api_read(fn_name("lyric_video_song_swap_toggle"), [
        name,
        before,
        path,
      ]);
      marks(chosen);
    }
    html_on_click(column, press);
    list_add(columns, {
      column,
      path,
    });
  }
  let b = property_get_or(swap, "original_hide", false);
  if (not(b)) {
    offer("now", before);
  }
  let after = property_get(swap, "after");
  function candidate(offered) {
    let label = property_get(offered, "label");
    let path = property_get(offered, "path");
    offer(label, path);
  }
  each(after, candidate);
  let chosen_before = property_get_or(swap, "chosen", []);
  marks(chosen_before);
  return row;
}
