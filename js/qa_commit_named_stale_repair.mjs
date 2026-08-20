import { qa_commit_named_stale_repair_names_now } from "./qa_commit_named_stale_repair_names_now.mjs";
import { qa_commit_named_entry_stale_is } from "./qa_commit_named_entry_stale_is.mjs";
import { qa_commit_named_all } from "./qa_commit_named_all.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { functions_names } from "./functions_names.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { null_is } from "./null_is.mjs";
export async function qa_commit_named_stale_repair() {
  "Reads the names out of every judged commit again, using what each gate actually said, so that a judgement made by an older reader is corrected rather than thrown away";
  "Its older neighbour could only forget, because the record kept the reading and not the saying. Where the saying is kept this is a recomputation: the names are a pure function of what the gate said, so any later reader can work them out again without a single gate being run. Fourteen minutes of judging becomes a moment of reading";
  "A commit whose saying was never kept cannot be helped here and is left exactly as it is, for its neighbour to forget. Nothing is guessed at from a reading alone";
  "Safe to run unasked in both directions. Where it changes a record it replaces a reading with the one the current reader gives, which is by definition the reading a fresh judging would have produced; where it cannot, it changes nothing at all";
  "What the gates FOUND is never touched - green and failed are the frozen commit's own answer and no reader has any business revising them. Only the names read out of the saying are written again";
  "The file is read whole here, and not through the reading everybody else uses. That one leaves out the judgings that no longer stand, which are precisely the ones this exists to put right - and worse, the file is written back from what was read, so a filtered reading would quietly delete every entry it was never even shown. A repair that deletes is not a repair.";
  let remembered = await qa_commit_named_all();
  let known = await functions_names();
  let repaired = [];
  let unhelpable = [];
  let kept = {};
  for (let commit of object_property_names(remembered)) {
    let entry = property_get(remembered, commit);
    let spoke = property_get_or_null(entry, "said");
    let unspoken = null_is(spoke);
    if (unspoken) {
      ("Named once however many of its gates are spoiled, because the entry is the unit that would be forgotten. Asking name by name here once listed the same commit as often as it had bad gates");
      let stale = qa_commit_named_entry_stale_is(entry);
      if (stale) {
        list_add(unhelpable, commit);
      }
      kept[commit] = entry;
      continue;
    }
    let was = property_get(entry, "named");
    let now = {};
    for (let gate of object_property_names(spoke)) {
      let said = property_get(spoke, gate);
      now[gate] = qa_commit_named_stale_repair_names_now(said, known);
    }
    let same = json_equal(was, now);
    if (same) {
      kept[commit] = entry;
      continue;
    }
    entry.named = now;
    kept[commit] = entry;
    list_add(repaired, commit);
  }
  let none = list_empty_is(repaired);
  if (none) {
    let unchanged = {
      repaired: [],
      unhelpable,
      kept: object_property_names(remembered).length,
    };
    return unchanged;
  }
  let path = qa_commit_named_path();
  await file_overwrite_json(path, kept);
  let r = {
    repaired,
    unhelpable,
    kept: object_property_names(kept).length,
  };
  return r;
}
