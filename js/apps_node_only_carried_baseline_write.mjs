import { baseline_known_write } from "./baseline_known_write.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { apps_node_only_carried_baseline_path } from "./apps_node_only_carried_baseline_path.mjs";
import { apps_node_only_carried } from "./apps_node_only_carried.mjs";
export async function apps_node_only_carried_baseline_write() {
  "Rewrite the carried-but-unrunnable ratchet from what the bundles hold right now. For seeding it once, and for shrinking it after a build machine's half has been given its own name - never for blessing a new one, which is the one thing the gate exists to refuse.";
  let known = await apps_node_only_carried();
  let path = apps_node_only_carried_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "a page now carries code it could never run, and did not before - ask apps_node_only_carried_steps for the chain and give the build machine's half its own name",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
