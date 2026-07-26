import { shadowing_baseline_path } from "./shadowing_baseline_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function shadowing_baseline_read() {
  "the shadowed names the repo already carried when the rule was written. The gate compares against this rather than against zero, so the rule binds new code today instead of waiting on a cleanup of every old file — and the list only ever shrinks, because anything not in it fails.";
  let path = shadowing_baseline_path();
  let contents = await file_read(path);
  let parsed = json_from(contents);
  let known = property_get(parsed, "known");
  return known;
}
