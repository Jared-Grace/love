import { memory_index_lines_welded } from "./memory_index_lines_welded.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function memory_index_welded_gate_run() {
  "Fails when any line of the memory index carries two entries welded together by a lost newline.";
  "Against zero rather than a record, because a weld is never anything but damage and the repair is one split. A baseline here would be a list of entries agreed to be unreadable.";
  "It is here because the fault recurred after being written down. Measured 2026-09-09: two more welds had appeared since the note recording the first twelve, and neither showed up in any gate - the size gate named both lines as its heaviest, which is what a welded pair looks like from the outside, and asked for their hooks to be shortened.";
  let found = await memory_index_lines_welded();
  let welded = property_get(found, "welded");
  let lines = property_get(found, "lines");
  list_empty_is_assert_json(welded, {
    hint: "these memory index lines hold two entries each - put the newline back in front of the second opener, and read the whole line first, because the hook that ends where the weld begins may have lost words as well as the line break",
    welded,
  });
  let r = {
    lines,
  };
  return r;
}
