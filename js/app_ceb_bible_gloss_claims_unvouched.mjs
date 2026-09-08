import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing_classes_all } from "./app_ceb_bible_gloss_roots_disagreeing_classes_all.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { binisaya_words_known_roots_named } from "./binisaya_words_known_roots_named.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
import { gloss_classes_claimed_unvouched } from "./gloss_classes_claimed_unvouched.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export async function app_ceb_bible_gloss_claims_unvouched(sample_size) {
  "The explanations in the Cebuano app that name a root nothing in the dictionary vouches for, most-seen first: where a made-up root would be if there is one.";
  "The dictionary cannot be asked whether it holds a word. A page with no breakdown and a page for a word the site never had are stored as the same four fields, three of them empty, so asking whether an entry is held answers only whether somebody asked. Every reading here that took holding for knowing was reading its own request back.";
  "What the site alone could have written is one of its entries naming another word as its root. That vouches, and it is the only thing in the stored data that does. Measured on the sightings gathered so far, it leaves a hundred and sixty three of them across seventy two pairs where the claimed root is held as a bare entry and named by nothing at all.";
  "This suspects and does not convict, and the asymmetry is the point. A perfectly good root can land here, because most roots are never named by anything. A root somebody invented cannot avoid landing here. So the list is worth reading top to bottom even though a row on it is not yet a fault, and it can only be settled by asking the site again for the page rather than for the reading of it - the pages are not kept, only what was read off them.";
  "How far the sample reached is reported beside how many classes there are. Where they differ, rows were left outside and this is short by an unknown amount.";
  "$plain sample_size";
  "how many classes to draw from, said as text as readily as as a number. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let gathered =
    await app_ceb_bible_gloss_roots_disagreeing_classes_all(sample_size);
  let classes = property_get(gathered, "classes");
  let known = await binisaya_words_known();
  let vouched = binisaya_words_known_roots_named(known);
  let list = object_property_names(vouched);
  let vouched_words = list_size(list);
  let suspect = gloss_classes_claimed_unvouched(classes, known);
  let totals = {
    sightings: 0,
  };
  function sighting_add(one_class) {
    let count = property_get(one_class, "count");
    let so_far = property_get(totals, "sightings");
    let total = add(so_far, count);
    property_set(totals, "sightings", total);
  }
  each(suspect, sighting_add);
  let classes_total = property_get(gathered, "classes_total");
  let classes_read = list_size(classes);
  let suspect_classes = list_size(suspect);
  let suspect_sightings = property_get(totals, "sightings");
  let r = {
    classes_total,
    classes_read,
    vouched_words,
    suspect_classes,
    suspect_sightings,
    suspect,
  };
  return r;
}
