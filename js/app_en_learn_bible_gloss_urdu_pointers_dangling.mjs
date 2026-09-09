import { gloss_chapters_pointers_dangling } from "./gloss_chapters_pointers_dangling.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_explain_pointer_is } from "./app_en_learn_bible_gloss_urdu_explain_pointer_is.mjs";
export async function app_en_learn_bible_gloss_urdu_pointers_dangling() {
  "How many Urdu explanations in the store that teaches English point the reader back at a word met earlier in the chapter, and how many of those point at nothing.";
  "This store is asked on its own because the pointer has to be recognised in the language the explanation is written in, and only this store is written in Urdu.";
  let found = await gloss_chapters_pointers_dangling(
    app_en_learn_bible_gloss_urdu_generate,
    app_en_learn_bible_gloss_urdu_explain_pointer_is,
  );
  return found;
}
