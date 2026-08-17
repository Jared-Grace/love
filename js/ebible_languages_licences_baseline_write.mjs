import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { ebible_languages_licences_baseline_path } from "./ebible_languages_licences_baseline_path.mjs";
import { ebible_languages_licences_commercial_not_bible_folders } from "./ebible_languages_licences_commercial_not_bible_folders.mjs";
export async function ebible_languages_licences_baseline_write() {
  "Rewrite the record of translations offered on terms this repo may not ship, from what the app carries right now.";
  "For seeding it once, and for shrinking it after one has been replaced. Never for blessing a new one - that is the single thing the gate exists to refuse, and this refuses it too.";
  let known = await ebible_languages_licences_commercial_not_bible_folders();
  let path = ebible_languages_licences_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "this translation is offered on terms this repo may not ship and was not before - choose a different translation for that language rather than recording this one as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
