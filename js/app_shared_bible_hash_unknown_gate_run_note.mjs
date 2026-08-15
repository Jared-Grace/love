import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function app_shared_bible_hash_unknown_gate_run_note(
  one,
  said,
  defects,
) {
  arguments_assert(arguments, 3);
  let defect = {
    hash: property_get(one, "hash"),
    said,
  };
  list_add(defects, defect);
  console.log("bible link  " + said);
}
