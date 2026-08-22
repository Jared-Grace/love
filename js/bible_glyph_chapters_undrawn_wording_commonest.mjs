import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
export function bible_glyph_chapters_undrawn_wording_commonest(wordings) {
  arguments_assert(arguments, 1);
  ("the wording the interlinear printed most often under one word, to label it by.");
  ("A LABEL IS NEEDED BECAUSE A NUMBER IS NOT READABLE. The counting is keyed by the word rather than by its English, and nobody choosing a picture can look at a Strong's number and know what it means - so the commonest of that word's wordings is carried alongside as the thing a person actually reads.");
  let most = "";
  let best = 0;
  for (let wording of object_property_names(wordings)) {
    let seen = property_get(wordings, wording);
    let bigger = greater_than(seen, best);
    if (bigger) {
      best = seen;
      most = wording;
    }
  }
  return most;
}
