import { baseline_growth_assert_generic } from "./baseline_growth_assert_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { names_versus_baseline } from "./names_versus_baseline.mjs";
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
  ("This is the plain-names case: a baseline holding a flat list of offending names,");
  ("compared with a flat difference.");
  await baseline_growth_assert_generic(
    known,
    path,
    names_versus_baseline,
    hint,
  );
}
