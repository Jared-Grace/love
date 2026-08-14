import { app_shared_description_baseline_path } from "./app_shared_description_baseline_path.mjs";
import { app_shared_description_missing } from "./app_shared_description_missing.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_shared_description_baseline_write() {
  "Rewrite the record of apps saying nothing about themselves from what the repo carries right now. For seeding it once, and for shrinking it after an app has been given its sentence.";
  "Never for taking in a new one, which is the single thing the gate exists to refuse. A new app with nothing to say is the case worth stopping, because it is the moment somebody is about to hand the address out.";
  let swept = await app_shared_description_missing();
  let known = property_get(swept, "names");
  let path = app_shared_description_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these apps say nothing about themselves and did not before - write the sentence rather than recording the silence as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
