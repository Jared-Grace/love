import { gloss_store_word_key_read } from "./gloss_store_word_key_read.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_chapters_pointers_dangling_ranked } from "./gloss_chapters_pointers_dangling_ranked.mjs";
import { app_en_learn_bible_gloss_urdu_explain_pointer_is } from "./app_en_learn_bible_gloss_urdu_explain_pointer_is.mjs";
export async function app_en_learn_bible_gloss_urdu_pointers_dangling_ranked() {
  "The chapters of the store that teaches English to an Urdu reader which send the reader back to a word met earlier and leave nothing there, heaviest first, each with the words it happened to.";
  let word_key_read = gloss_store_word_key_read(
    app_en_learn_bible_gloss_urdu_generate,
  );
  let r = await gloss_chapters_pointers_dangling_ranked(
    app_en_learn_bible_gloss_urdu_generate,
    app_en_learn_bible_gloss_urdu_explain_pointer_is,
    word_key_read,
  );
  return r;
}
