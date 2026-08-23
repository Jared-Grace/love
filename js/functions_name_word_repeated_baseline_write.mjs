import { baseline_known_write } from "./baseline_known_write.mjs";
import { functions_name_word_repeated_baseline_growth_assert } from "./functions_name_word_repeated_baseline_growth_assert.mjs";
import { functions_name_word_repeated_baseline_path } from "./functions_name_word_repeated_baseline_path.mjs";
import { functions_name_word_repeated_named } from "./functions_name_word_repeated_named.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_name_word_repeated_baseline_write() {
  "rewrite the doubled-word ratchet from the names the repo carries right now. For seeding it once, and for shrinking it after a name has been renamed - never for blessing a new doubled name, which is the one thing the gate exists to refuse.";
  let told = await functions_name_word_repeated_named();
  let known = property_get(told, "offenders");
  await functions_name_word_repeated_baseline_growth_assert(known);
  let path = functions_name_word_repeated_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
