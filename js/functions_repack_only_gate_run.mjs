import { arguments_assert } from "./arguments_assert.mjs";
import { functions_repack_only_all } from "./functions_repack_only_all.mjs";
import { property_get } from "./property_get.mjs";
import { functions_repack_only_baseline_path } from "./functions_repack_only_baseline_path.mjs";
import { functions_repack_only_hint } from "./functions_repack_only_hint.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function functions_repack_only_gate_run() {
  "QA gate: no new function is written whose whole product is a record it took apart and put back together. Whoever called it could have read the entries where they already were.";
  "This is what a cut leaves behind when it is asked for a piece that was never a piece. The lines come out under a new name, and because everything they touched stays behind, the new function has to be handed each name and hand each one back - so the body becomes lifting and putting back with at most one line of work in the middle, and grows with the number of names rather than with the amount done.";
  "Not a matter of taste. Two hundred and seventy six of these cuts landed in thirty hours across forty eight functions, and the lifting they added is what carried one page past the size it is allowed to be. That page had nothing wrong with it; it was made bigger by eight functions that between them did nothing.";
  "Measured against what the repo already carried rather than against zero, because folding one of these back into its caller is a change to a body somebody is reading, and there are enough of them that doing it in one sweep would collide with everybody. The rule binds what is written from now on.";
  "A function written this way on purpose is not a fault and is not renamed to escape - it is written down by name where the reason can be read, which the complaint says at the moment it stops somebody.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let swept = await functions_repack_only_all();
  let walked = property_get(swept, "walked");
  let offenders = property_get(swept, "names");
  let path = functions_repack_only_baseline_path();
  let hint = functions_repack_only_hint(
    "this hands back nothing it did not lift out of something else, so every line of it is carrying a name from one side to the other - put the lines back where they were called from, or, if a fresh record is the whole of what it is for, name it to ",
  );
  let f_name = fn_name("functions_repack_only_baseline_write");
  await baseline_names_gate_generic(offenders, path, hint, f_name);
  let r = {
    walked,
  };
  return r;
}
