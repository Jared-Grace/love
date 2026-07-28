import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { names_versus_baseline } from "./names_versus_baseline.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { not } from "./not.mjs";
export async function baseline_known_growth_assert(known, path, hint) {
  arguments_assert(arguments, 3);
  ("Refuse to record a name a ratchet file did not already hold.");
  ("A ratchet that can be rewritten in both directions is not a ratchet, and the");
  ("rewrite would be reached for at exactly the moment the gate went red - which is");
  ("the moment it was doing its job.");
  ("The first seeding has no file to compare against and is allowed, and so is any");
  ("rewrite that only drops names.");
  ("The reading half of this was already shared. This is its twin, and it takes the");
  ("path and the sentence to say because those are the only two things that differ");
  ("between one ratchet and the next.");
  let exists = await file_exists(path);
  let first = not(exists);
  if (first) {
    return;
  }
  let recorded = await baseline_known_read(path);
  let change = names_versus_baseline(known, recorded);
  let added = property_get(change, "added");
  list_empty_is_assert_json(added, {
    hint,
    added,
  });
}
