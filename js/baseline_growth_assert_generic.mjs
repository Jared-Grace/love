import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { not } from "./not.mjs";
export async function baseline_growth_assert_generic(
  known,
  path,
  versus,
  hint,
) {
  arguments_assert(arguments, 4);
  ("Refuse to record anything a ratchet file did not already hold.");
  ("A ratchet that can be rewritten in both directions is not a ratchet, and the");
  ("rewrite would be reached for at exactly the moment the gate went red - which is");
  ("the moment it was doing its job.");
  ("The first seeding has no file to compare against and is allowed, and so is any");
  ("rewrite that only drops entries.");
  ("Reading the file is the same act for every ratchet and comparing is not: one");
  ("holds plain names and another holds a list per function. So the comparison is");
  ("the argument, and what stays here is the part none of them may differ on.");
  let exists = await file_exists(path);
  let first = not(exists);
  if (first) {
    return;
  }
  let recorded = await baseline_known_read(path);
  let change = versus(known, recorded);
  let added = property_get(change, "added");
  list_empty_is_assert_json(added, {
    hint,
    added,
  });
}
