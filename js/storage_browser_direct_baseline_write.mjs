import { arguments_assert } from "./arguments_assert.mjs";
import { storage_browser_direct_all } from "./storage_browser_direct_all.mjs";
import { storage_browser_direct_baseline_path } from "./storage_browser_direct_baseline_path.mjs";
import { baseline_growth_assert_generic } from "./baseline_growth_assert_generic.mjs";
import { names_versus_baseline } from "./names_versus_baseline.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function storage_browser_direct_baseline_write() {
  "rewrite the ratchet on files speaking straight to the browser's stores from what the repo does right now. For seeding it once, and for shrinking it after a file has been moved onto a door - never for blessing a new one, which is the one thing the gate exists to refuse, and the refusal is enforced here rather than left to whoever runs it.";
  arguments_assert(arguments, 0);
  let known = await storage_browser_direct_all();
  let path = storage_browser_direct_baseline_path();
  await baseline_growth_assert_generic(
    known,
    path,
    names_versus_baseline,
    storage_browser_direct_hint(
      "these speak straight to a browser store and the record does not hold them, so this rewrite would bless them - move each onto a door instead, or, if speaking to the browser is the whole of what it does, name it to ",
    ),
  );
  let r = await baseline_known_write(known, path);
  return r;
}
