import { qa_commit_named } from "./qa_commit_named.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { qa_gate_said_advice_remove } from "./qa_gate_said_advice_remove.mjs";
import { functions_names_in_text } from "./functions_names_in_text.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_name_unmistakable_is } from "./function_name_unmistakable_is.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export async function qa_commit_named_stale_repair() {
  "Reads the names out of every judged commit again, using what each gate actually said, so that a judgement made by an older reader is corrected rather than thrown away";
  "Its older neighbour could only forget, because the record kept the reading and not the saying. Where the saying is kept this is a recomputation: the names are a pure function of what the gate said, so any later reader can work them out again without a single gate being run. Fourteen minutes of judging becomes a moment of reading";
  "A commit whose saying was never kept cannot be helped here and is left exactly as it is, for its neighbour to forget. Nothing is guessed at from a reading alone";
  "Safe to run unasked in both directions. Where it changes a record it replaces a reading with the one the current reader gives, which is by definition the reading a fresh judging would have produced; where it cannot, it changes nothing at all";
  "What the gates FOUND is never touched - green and failed are the frozen commit's own answer and no reader has any business revising them. Only the names read out of the saying are written again";
  let remembered = await qa_commit_named();
  let known = await functions_names();
  function names_now(said) {
    let accused = qa_gate_said_advice_remove(said);
    let names = functions_names_in_text(accused, known);
    return names;
  }
  let repaired = [];
  let unhelpable = [];
  let kept = {};
  for (let commit of object_property_names(remembered)) {
    let entry = property_get(remembered, commit);
    let spoke = property_get_or_null(entry, "said");
    let unspoken = null_is(spoke);
    if (unspoken) {
      let named = property_get(entry, "named");
      for (let gate of object_property_names(named)) {
        for (let name of property_get(named, gate)) {
          let unmistakable = function_name_unmistakable_is(name);
          if (not(unmistakable)) {
            list_add(unhelpable, commit);
            break;
          }
        }
      }
      kept[commit] = entry;
      continue;
    }
    let was = property_get(entry, "named");
    let now = {};
    for (let gate of object_property_names(spoke)) {
      let said = property_get(spoke, gate);
      now[gate] = names_now(said);
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
