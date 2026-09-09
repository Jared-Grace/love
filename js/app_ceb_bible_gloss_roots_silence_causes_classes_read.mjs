import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing_classes_all } from "./app_ceb_bible_gloss_roots_disagreeing_classes_all.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { binisaya_words_known_folded_index } from "./binisaya_words_known_folded_index.mjs";
import { app_ceb_bible_gloss_roots_silence_causes_sightings } from "./app_ceb_bible_gloss_roots_silence_causes_sightings.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_silence_causes_classes_read(
  sample_size,
) {
  arguments_assert(arguments, 1);
  let gathered =
    await app_ceb_bible_gloss_roots_disagreeing_classes_all(sample_size);
  let classes = property_get(gathered, "classes");
  let known = await binisaya_words_known();
  let folded_index = binisaya_words_known_folded_index(known);
  let r2 = app_ceb_bible_gloss_roots_silence_causes_sightings(
    classes,
    known,
    folded_index,
  );
  let sightings = property_get(r2, "sightings");
  let classes_counted = property_get(r2, "classes_counted");
  let reachable_now = property_get(r2, "reachable_now");
  let totals = property_get(r2, "totals");
  let silent = property_get(r2, "silent");
  let marked = property_get(r2, "marked");
  let classes_total = property_get(gathered, "classes_total");
  let classes_read = list_size(marked);
  let r = {
    sightings,
    classes_counted,
    reachable_now,
    totals,
    silent,
    classes_total,
    classes_read,
  };
  return r;
}
