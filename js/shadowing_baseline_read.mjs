import { baseline_known_read } from "./baseline_known_read.mjs";
import { functions_shadowing_baseline_path } from "./functions_shadowing_baseline_path.mjs";
export async function shadowing_baseline_read() {
  "the shadowed names the repo already carried when the rule was written. The gate compares against this rather than against zero, so the rule binds new code today instead of waiting on a cleanup of every old file — and the list only ever shrinks, because anything not in it fails.";
  let path = functions_shadowing_baseline_path();
  let known = await baseline_known_read(path);
  return known;
}
