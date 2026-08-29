import { html_clear } from "./html_clear.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { divide } from "./divide.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { each } from "./each.mjs";
export function lyric_timing_times_show(times, held) {
  "$plain times";
  "$plain held";
  "Writes out every line that has been tapped so far, the one just tapped at the top.";
  "THE NEWEST IS FIRST BECAUSE IT IS THE ONE BEING CHECKED. Written the other way round the newest line arrives below the bottom of a box of a fixed height, so every tap would have to be followed by a scroll to the end - and a scroll to the end can only be asked for after the browser has laid the box out, which is a piece of timing to get wrong for no gain. Turning the list round answers it with no scrolling at all, and the older times are still there for anybody who goes looking.";
  "It is rebuilt from the tapping each time rather than added to, because stepping back and tapping again overwrites a time, and a list that only ever grows would go on showing the time that was just corrected.";
  "Only the lines up to where the cursor stands are written. Stepping back leaves the time it stepped over in place on purpose, so the times list runs further than the tapping does, and showing all of it would present a time for a line the person is about to tap again as though it were already settled.";
  html_clear(times);
  function line_text(start, index) {
    let hundredths = multiply_round(start, 100);
    let seconds = divide(hundredths, 100);
    let text = seconds + "  " + held.texts[index];
    return text;
  }
  function row_add(text) {
    html_div_text(times, text);
  }
  let tapped = list_slice(held.starts, 0, held.cursor);
  let rows = list_map_index(tapped, line_text);
  let newest_first = list_copy_reverse(rows);
  each(newest_first, row_add);
}
