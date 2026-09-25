import { gloss_stores_offenders_generic } from "./gloss_stores_offenders_generic.mjs";
import { gloss_store_verse_order_offenders } from "./gloss_store_verse_order_offenders.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each } from "./each.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
export async function gloss_stores_verse_order_gate_run() {
  "Gate: no gloss store holds a chapter whose passages sit in any order but the order the chapter is read in. Throws so the dispatcher seam exits nonzero.";
  "THIS IS MEASURED AGAINST NOUGHT AND NOT AGAINST A RECORD, because the writer was mended on 2026-09-24 and everything written before it was put back in order the same day. There is no backlog for a record to hold, so a chapter out of order is a chapter written by something that is not sorting, and that is a fault today rather than a debt from before.";
  "The fault it stands against was silent for as long as it lasted. A chapter is written a passage at a time and every write put its passage last, so what a chapter held was the order it happened to be authored in; a passage covering several verses takes longer to write and so landed after the single verses that follow it. Seven hundred and seventy-six of the fifteen hundred and seventeen chapters of the three gloss stores were out of order the day it was measured, and nothing anywhere said so - the reader was simply shown the file.";
  "It is worth a gate rather than trust in the mended writer because the order is what the reader is shown and what every explanation is checked against. An explanation saying a word stood in verse eighteen is telling the truth about the Bible and a lie about the file, and the check that looks for a word met earlier in the chapter will agree with whatever order the file happens to hold - which is how twenty-three explanations pointing at nothing sat behind a green reading until the order was mended.";
  "A store that is not on the disk is passed over and said so rather than counted as clean, because these stores live on a drive that is not always mounted, and nothing looked at reads exactly like nothing wrong.";
  let asked = await gloss_stores_offenders_generic(
    gloss_store_verse_order_offenders,
  );
  let counts = property_get(asked, "counts");
  let missing = property_get(asked, "missing");
  let out_of_order = [];
  function store_gather(count) {
    let store = property_get(count, "store");
    let found = property_get(count, "found");
    let offenders = property_get(found, "offenders");
    function offender_named(offender) {
      let named = {
        store,
        chapter_code: property_get(offender, "chapter_code"),
        holds: property_get(offender, "holds"),
        should_hold: property_get(offender, "should_hold"),
      };
      return named;
    }
    let named = list_map(offenders, offender_named);
    list_add_multiple(out_of_order, named);
  }
  each(counts, store_gather);
  list_empty_is_assert_json(out_of_order, {
    hint: text_combine_multiple([
      "these stored chapters hold their passages in some order other than the order they are read in - run ",
      fn_name("gloss_stores_verse_order_repair"),
      " to put them back, and then find what wrote them without sorting",
    ]),
    out_of_order,
  });
  function store_chapters(count) {
    let found = property_get(count, "found");
    let chapters = property_get(found, "chapters");
    return chapters;
  }
  let r = {
    stores: list_size(counts),
    chapters: list_map_sum(counts, store_chapters),
    skipped: missing,
  };
  return r;
}
