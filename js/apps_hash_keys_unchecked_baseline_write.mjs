import { apps_hash_keys_unchecked } from "./apps_hash_keys_unchecked.mjs";
import { apps_hash_keys_unchecked_baseline_path } from "./apps_hash_keys_unchecked_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function apps_hash_keys_unchecked_baseline_write() {
  "Rewrite the unanswered-link-word ratchet from what the repo carries right now. For seeding it once, and for shrinking it after a word has been given a field and a page has been made to ask - never for blessing a new one, which is the one thing the gate exists to refuse.";
  let known = await apps_hash_keys_unchecked();
  let path = apps_hash_keys_unchecked_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "an app reads a word of its own address that nobody answers for, and did not before - describe the word as a field, and have the page ask before it fetches or clears anything",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
