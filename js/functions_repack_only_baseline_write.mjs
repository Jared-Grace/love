import { functions_repack_only_names } from "./functions_repack_only_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_repack_only_baseline_path } from "./functions_repack_only_baseline_path.mjs";
import { functions_repack_only_hint } from "./functions_repack_only_hint.mjs";
import { baseline_growth_assert_generic } from "./baseline_growth_assert_generic.mjs";
import { names_versus_baseline } from "./names_versus_baseline.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function functions_repack_only_baseline_write() {
  "rewrite the ratchet on functions that only take a record apart and put it back together, from what the repo does right now. For seeding it once, and for shrinking it after a function has been folded back into its caller or written down as deliberate - never for blessing a new one, which is the one thing the gate exists to refuse, and the refusal is enforced here rather than left to whoever runs it.";
  arguments_assert(arguments, 0);
  let known = await functions_repack_only_names();
  let path = functions_repack_only_baseline_path();
  let hint = functions_repack_only_hint(
    "these hand back nothing they did not lift out of something else, and the record does not hold them, so this rewrite would bless them - fold each back into the one place that calls it instead, or, if a fresh record is the whole of what it is for, name it to ",
  );
  await baseline_growth_assert_generic(
    known,
    path,
    names_versus_baseline,
    hint,
  );
  let r = await baseline_known_write(known, path);
  return r;
}
