import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_songs_rows_items } from "./giveaway_psalms_songs_rows_items.mjs";
import { giveaway_psalms_items_defects } from "./giveaway_psalms_items_defects.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function giveaway_psalms_items_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: no file in any box of the psalms giveaway is named the same as another file in that box. Throws so the dispatcher seam exits nonzero.");
  ("★ IT CHECKS THE BOXES AND NOT THE RECORD, WHICH IS WHY IT IS A SECOND GATE AND NOT A LINE ADDED TO THE FIRST. The record gate reads the written-down singing and judges the names written down there; a box is that plus the words of its psalm, named by a rule that is not written down anywhere because it needs nothing but the psalm's number. So the collision this looks for lives in a place the record has never seen, and asking the record about it would always come back clean.");
  ("★ IT ASKS NOTHING OF THE STORAGE AND NOTHING OF THE DISK, ON PURPOSE, BECAUSE A GATE HAS TO ANSWER THE SAME EVERY TIME IT IS ASKED. The words of a psalm would have to be fetched to be looked at, and a fetch that fails is common enough that a hundred bibles once read as having no verses and twenty-eight of them read in full the same morning. A gate that went red for that would be red for reasons nobody caused, and a gate people learn to re-run is a gate people learn to ignore. Names need no fetching, so names are what this judges.");
  ("The judging is next door and is handed the boxes, so a box with a collision in it can be made up and every fault shown to fire. This half only reads, prints and throws.");
  let path = giveaway_psalms_record_path();
  let rows = await file_read_json(path);
  let items = giveaway_psalms_songs_rows_items(rows);
  let defects = giveaway_psalms_items_defects(items);
  for (let one of defects) {
    console.log(one.fault + "  " + one.identifier + "  " + one.path_in_item);
  }
  console.log(
    "giveaway box name collisions: " +
      defects.length +
      "  of boxes: " +
      items.length,
  );
  if (list_empty_not_is(defects)) {
    throw new Error(
      "giveaway psalms items gate: " +
        defects.length +
        " files would be uploaded under a name another file in the same box already has, and the host replaces rather than refuses - which naming rule spelled the same name twice?",
    );
  }
  let r = {
    defects: 0,
    boxes: items.length,
  };
  return r;
}
