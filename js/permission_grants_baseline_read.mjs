import { baseline_known_read } from "./baseline_known_read.mjs";
import { permission_grants_baseline_path } from "./permission_grants_baseline_path.mjs";
export async function permission_grants_baseline_read() {
  "the standing grants that already failed the check when the rule was written, each with how many reasons it failed for";
  "the gate measures against this rather than against zero, because the grants that fail are ones a human weighed and wrote deliberately — measuring against zero would make the gate red on arrival and stay red, which is a gate nobody can clear and so nobody reads";
  let path = permission_grants_baseline_path();
  let known = await baseline_known_read(path);
  return known;
}
