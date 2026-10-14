import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_record_path } from "./giveaway_psalms_record_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { giveaway_psalms_paintings_rows } from "./giveaway_psalms_paintings_rows.mjs";
import { giveaway_psalms_record_documents_defects } from "./giveaway_psalms_record_documents_defects.mjs";
export async function giveaway_psalms_record_documents_report() {
  arguments_assert(arguments, 0);
  ("Say where the written record of the pictures and the timing documents that choose them have come apart.");
  ("★ IT IS A REPORT AND NOT YET A GATE, THOUGH EVERYTHING IT READS IS IN THIS REPO AND A GATE IS WHAT IT OUGHT TO BE. It would be red the moment it was registered - six disagreements stand today, and four of them are cleared by writing the record again, which is a write and so is the owner's line to run rather than an agent's. Registering a gate that is red for a reason nobody can fix without the owner would stop the whole gate run for every other agent sharing this folder, and the thing it was protecting would be no safer for it. So it says what it found and the gate follows the repair.");
  ("The three faults are all named rather than counted together, because the three ask for three different acts: a row the documents no longer name is cleared by writing the record again, a chosen picture missing from the record is cleared the same way, and a published name pointing at two different files is cleared by nobody until somebody decides which file keeps the name.");
  let path = giveaway_psalms_record_path();
  let rows = await file_read_json(path);
  let documented = await giveaway_psalms_paintings_rows();
  let defects = giveaway_psalms_record_documents_defects(rows, documented.rows);
  for (let one of defects) {
    console.log(
      one.fault + "  " + one.name_published + "  " + one.path_in_repo,
    );
  }
  console.log(
    "record and document disagreements: " +
      defects.length +
      "  record rows: " +
      rows.length +
      "  pictures the documents choose: " +
      documented.rows.length,
  );
  let r = {
    defects_count: defects.length,
    record_rows_count: rows.length,
    documented_count: documented.rows.length,
    defects,
  };
  return r;
}
