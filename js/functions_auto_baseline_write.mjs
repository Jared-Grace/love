import { functions_auto_baseline_path } from "./functions_auto_baseline_path.mjs";
import { functions_auto_refused } from "./functions_auto_refused.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function functions_auto_baseline_write() {
  "record which functions the normalize pass already cannot carry through and leave loadable, so the gate can refuse the next one without refusing the ones already here";
  "run this after fixing one, to shrink the record - never to make a newly broken function green, which is the one thing it must not be used for";
  let path = functions_auto_baseline_path();
  let refused = await functions_auto_refused();
  let r = await baseline_known_write(refused, path);
  return r;
}
