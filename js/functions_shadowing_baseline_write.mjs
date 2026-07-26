import { file_overwrite } from "./file_overwrite.mjs";
import { functions_shadowing } from "./functions_shadowing.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function functions_shadowing_baseline_write() {
  "rewrite data/shadowing_baseline.json from what the repo shadows right now. For seeding the ratchet once, and for shrinking it after names have been cleaned up — never for blessing a new offense, which is the one thing the gate exists to refuse.";
  let known = await functions_shadowing();
  let baseline = {
    known,
  };
  let json = json_format_to(baseline);
  await file_overwrite("data/shadowing_baseline.json", json);
  let r = known.length;
  return r;
}
