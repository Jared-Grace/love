import { app_en_learn_bible_gloss_urdu_bible_folders } from "./app_en_learn_bible_gloss_urdu_bible_folders.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_chapters_absent_generic } from "./gloss_chapters_absent_generic.mjs";
import { list_first } from "./list_first.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_absent() {
  "Every chapter of the New Testament the Urdu gloss store has not been started on.";
  "The bible read is the English one, which is the first of the two this store is built from and the one the explanations are about. A chapter is absent from this store only if it is missing from the wording being explained, and reading the Urdu text instead would name chapters nobody here is waiting on.";
  let bible_folders = app_en_learn_bible_gloss_urdu_bible_folders();
  let bible_folder = list_first(bible_folders);
  let r = await gloss_chapters_absent_generic(
    app_en_learn_bible_gloss_urdu_generate,
    bible_folder,
  );
  return r;
}
