import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { reply_bible_run_citation_after } from "./reply_bible_run_citation_after.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { prayer_end } from "./prayer_end.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function reply_bible_runs_line(runs) {
  arguments_assert(arguments, 1);
  ("The one reply line for all the verses a message said, closed by one end of a prayer: 1 John 3:23; 4:7-10 Amen! when they were said whole. A run said only in part is quoted back right after its own citation, so a quoted run stands apart, with whole citations on both sides, and no reader takes its words for a neighbour's.");
  let pieces = [];
  let previous = null;
  for (let run of runs) {
    let quote = property_get(run, "quote");
    if (quote) {
      previous = null;
    }
    if (null_is(previous) && list_empty_not_is(pieces)) {
      list_add(pieces, " ");
    }
    let item = reply_bible_run_citation_after(previous, run);
    list_add(pieces, item);
    previous = run;
    if (quote) {
      let list2 = property_get(run, "verses");
      let list = list_map_property(list2, "text");
      list_add(pieces, " ");
      let item2 = list_join_space(list);
      list_add(pieces, item2);
      previous = null;
    }
  }
  let item3 = prayer_end();
  list_add(pieces, item3);
  let line = list_join_empty(pieces);
  return line;
}
