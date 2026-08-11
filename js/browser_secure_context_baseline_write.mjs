import { arguments_assert } from "./arguments_assert.mjs";
import { browser_secure_context_all } from "./browser_secure_context_all.mjs";
import { browser_secure_context_baseline_path } from "./browser_secure_context_baseline_path.mjs";
import { browser_secure_context_hint } from "./browser_secure_context_hint.mjs";
import { baseline_growth_assert_generic } from "./baseline_growth_assert_generic.mjs";
import { names_versus_baseline } from "./names_versus_baseline.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function browser_secure_context_baseline_write() {
  "rewrite the ratchet on reaching for the browser's https-only things from what the repo does right now. For seeding it once, and for shrinking it after a use has been given something to fall back on - never for blessing a new one, which is the one thing the gate exists to refuse, and the refusal is enforced here rather than left to whoever runs it.";
  arguments_assert(arguments, 0);
  let known = await browser_secure_context_all();
  let path = browser_secure_context_baseline_path();
  let hint = browser_secure_context_hint(
    "these reach for something the browser hands out only over https and the record does not hold them, so this rewrite would bless them - ask first whether the thing is there instead, and see ",
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
