import { gloss_pointers_dangling_places } from "./gloss_pointers_dangling_places.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_explain_pointer_is } from "./app_en_learn_bible_gloss_urdu_explain_pointer_is.mjs";
export async function app_en_learn_bible_gloss_urdu_pointers_dangling_places() {
  "Every English word in the English-to-Urdu gloss store still wearing a pointer that leads nowhere, given back with the verses it stands in, so the Urdu wording it is owed can be written.";
  "The store and the reading of what counts as a pointer are named here rather than asked for, because there is one of each and a caller that had to supply them could supply a pair that do not belong together.";
  let places = await gloss_pointers_dangling_places(
    app_en_learn_bible_gloss_urdu_generate,
    app_en_learn_bible_gloss_urdu_explain_pointer_is,
  );
  return places;
}
