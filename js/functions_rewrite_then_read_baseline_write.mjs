import { functions_rewrite_then_read_names } from "./functions_rewrite_then_read_names.mjs";
import { functions_rewrite_then_read_baseline_path } from "./functions_rewrite_then_read_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function functions_rewrite_then_read_baseline_write() {
  "Rewrite the stale-read ratchet from what the repo does right now. For seeding it once, and for shrinking it after a command has been made to ask its second half in a fresh run - never for blessing a new one, which is the one thing the gate exists to refuse.";
  "IT WAS SEEDED EMPTY AND THAT IS THE WHOLE POINT OF WRITING IT NOW. Both members the class ever had were repaired before this existed, so the file it writes today holds nothing, and every name that ever appears in it afterwards will be one somebody wrote after the fix was already available.";
  let known = await functions_rewrite_then_read_names();
  let path = functions_rewrite_then_read_baseline_path();
  let f_name = fn_name("function_run_fresh");
  let hint = text_combine_multiple([
    "a command now rewrites a named function and then asks something that reads it, and did not before - ask for the second half in its own run with ",
    f_name,
  ]);
  await baseline_known_growth_assert(known, path, hint);
  let r = await baseline_known_write(known, path);
  return r;
}
