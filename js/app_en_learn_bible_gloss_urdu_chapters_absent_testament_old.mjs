import { app_en_learn_bible_gloss_urdu_bible_folders } from "./app_en_learn_bible_gloss_urdu_bible_folders.mjs";
import { list_first } from "./list_first.mjs";
import { gloss_chapters_absent_testament_old_generic } from "./gloss_chapters_absent_testament_old_generic.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_absent_testament_old() {
  "Every chapter of the Old Testament the Urdu gloss store has not been started on.";
  "The new testament twin of this reads zero absent, and that is true and misleading at once: it is the answer for one half of the bible and this store is being asked to cover both. This is the reading to sit down with when the question is which chapter to author next.";
  "The bible read is the English one, which is the first of the two this store is built from and the one the explanations are about. A chapter is absent from this store only if it is missing from the wording being explained, and reading the Urdu text instead would name chapters nobody here is waiting on.";
  let bible_folders = app_en_learn_bible_gloss_urdu_bible_folders();
  let bible_folder = list_first(bible_folders);
  let r = await gloss_chapters_absent_testament_old_generic(
    app_en_learn_bible_gloss_urdu_generate,
    bible_folder,
  );
  return r;
}
