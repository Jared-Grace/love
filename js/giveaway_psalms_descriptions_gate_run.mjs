import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_songs_rows_items } from "./giveaway_psalms_songs_rows_items.mjs";
import { giveaway_psalms_descriptions_defects } from "./giveaway_psalms_descriptions_defects.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function giveaway_psalms_descriptions_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every box of the psalms giveaway can say what is in it. Throws so the dispatcher seam exits nonzero.");
  ("★ THIS GATE EXISTS BECAUSE 82 OF THE 83 BOXES ONCE STOPPED DEAD AND NOTHING WAS RED. The words for a picture were filed under painting, the kind word had been settled as picture, and the two only had to meet for every box with a crop in it to throw instead of describing itself. Nothing caught it, because no gate had ever asked a box to describe itself - the names were checked, the files were checked, and the one thing published beside them was never asked for until the moment of publishing.");
  ("★ A BOX THAT CANNOT DESCRIBE ITSELF IS A BOX THAT CANNOT BE PUT UP, SO ASKING HERE IS THE DIFFERENCE BETWEEN ONE RED GATE AND A HALF-UPLOADED SHELF. The paragraph is written at the moment of uploading, so a box whose paragraph throws stops the upload partway along, with some psalms up and some not and the shelf in a state nobody chose. Asked here the whole shelf answers at once and before anything has left this machine.");
  ("★ IT ASKS NOTHING OF THE STORAGE AND NOTHING OF THE DISK, LIKE THE TWO NAME GATES BESIDE IT, SO THAT IT ANSWERS THE SAME EVERY TIME IT IS ASKED. A sentence is built from the record and from the fixed list of kinds, both of which are files in this repo. A gate that went red for a failed fetch would be red for reasons nobody caused, and a gate people learn to re-run is a gate people learn to ignore.");
  ("The judging is next door and is handed the boxes, so a box holding an impossible kind can be made up and the silent fault shown to fire. This half only reads, prints and throws.");
  let path = giveaway_psalms_record_path();
  let rows = await file_read_json(path);
  let items = giveaway_psalms_songs_rows_items(rows);
  let defects = giveaway_psalms_descriptions_defects(items);
  for (let one of defects) {
    console.log(one.fault + "  " + one.identifier + "  " + one.kind);
  }
  console.log(
    "giveaway box description defects: " +
      defects.length +
      "  of boxes: " +
      items.length,
  );
  if (list_empty_not_is(defects)) {
    throw new Error(
      "giveaway psalms descriptions gate: " +
        defects.length +
        " boxes cannot say what is in them, and the paragraph is written at the moment of uploading - which kind of file has no words anywhere saying how to name it?",
    );
  }
  let r = {
    defects: 0,
    boxes: items.length,
  };
  return r;
}
