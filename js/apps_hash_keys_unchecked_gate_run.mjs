import { apps_hash_keys_unchecked } from "./apps_hash_keys_unchecked.mjs";
import { apps_hash_keys_unchecked_baseline_path } from "./apps_hash_keys_unchecked_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export async function apps_hash_keys_unchecked_gate_run() {
  "Gate: no app grows a new word in its own address that nobody answers for.";
  "Nothing goes red when it happens. A word a page cannot make sense of is read anyway, turned into whatever a wrong word turns into, and the page carries on - so the reader gets a screen that is quietly not the one their link asked for, and the page looks like it worked.";
  "Measured against what the repo already carried rather than against zero, because clearing one is not mechanical. A verse number cannot be checked here at all - knowing whether a chapter has that verse means fetching the chapter, and this whole family answers before anything is fetched. A search word is free text and there is nothing to be wrong about. Which of the rest deserve a field, and what a good guess would even be for a number, is a judgment somebody has to make one at a time. So the record only shrinks.";
  let offenders = await apps_hash_keys_unchecked();
  let path = apps_hash_keys_unchecked_baseline_path();
  let name_write = fn_name("apps_hash_keys_unchecked_baseline_write");
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    "an app reads this word of its own address and nobody answers for it - either no field describes the word, or one does and the page never asks; describe it as a field, and have the page ask before it fetches or clears anything",
    name_write,
  );
  return r;
}
