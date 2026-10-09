import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_songs_rows_whole_chapter_parts_cases } from "./giveaway_psalms_songs_rows_whole_chapter_parts_cases.mjs";
import { property_get } from "./property_get.mjs";
import { giveaway_psalms_songs_rows_whole_chapter_parts } from "./giveaway_psalms_songs_rows_whole_chapter_parts.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function giveaway_psalms_songs_rows_whole_chapter_parts_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: the check that no sung psalm goes up at two addresses names the file each written case says it names. Throws so the dispatcher seam exits nonzero.");
  ("★ THIS IS THE GATE ON THE GATE, AND HERE IT IS THE ONLY ONE THAT CAN EVER SAY ANYTHING. The record it guards has no offending row at all - thirty-one of its passages start at verse one and none of them reaches its chapter's last verse - so the gate over the record passes by printing nothing, exactly as it would if the check had been emptied out. These cases are therefore not a second opinion on the check, they are the whole of the evidence that it works.");
  ("The answer is the file names found, joined, rather than the count. A count of one proves something fired and not that the right row was the one that fired, and it is the right row that matters when the repair is a rename somebody has to go and do.");
  let cases = giveaway_psalms_songs_rows_whole_chapter_parts_cases();
  function answer(c) {
    let rows = property_get(c, "rows");
    let verse_last_by_chapter = property_get(c, "verse_last_by_chapter");
    let found = giveaway_psalms_songs_rows_whole_chapter_parts(
      rows,
      verse_last_by_chapter,
    );
    let file_names = list_map_property(found, "file_name");
    let joined = list_join_comma(file_names);
    return joined;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "file_names",
    "why",
    "giveaway psalms songs rows whole chapter parts",
  );
  return r;
}
