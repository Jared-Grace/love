import { app_shared_text_reader_carried_unpicked_names } from "./app_shared_text_reader_carried_unpicked_names.mjs";
import { app_shared_text_reader_carried_unpicked_baseline_path } from "./app_shared_text_reader_carried_unpicked_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_shared_text_reader_carried_unpicked_baseline_write() {
  "Rewrite the carried-words baseline from what the repo carries right now. For seeding the ratchet once, and for shrinking it after one of the functions has been taught to ask what language the reader reads - never for blessing a new one, which is the one thing the gate exists to refuse.";
  "Settling one means writing what it says in every language the app promised, which nothing here can do for the reader: a translation is authored by somebody who reads both. So the repair is always by hand and this is only what records that it happened.";
  let known = await app_shared_text_reader_carried_unpicked_names();
  let path = app_shared_text_reader_carried_unpicked_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these functions hand words onto the page without asking what language the reader reads and did not before - say the words in each language the app promised rather than recording the english as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
