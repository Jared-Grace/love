import { gloss_store_word_key_read } from "./gloss_store_word_key_read.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_chapters_pointers_dangling } from "./gloss_chapters_pointers_dangling.mjs";
import { app_en_learn_bible_gloss_urdu_explain_pointer_is } from "./app_en_learn_bible_gloss_urdu_explain_pointer_is.mjs";
export async function app_en_learn_bible_gloss_urdu_pointers_dangling() {
  "How many Urdu explanations in the store that teaches English point the reader back at a word met earlier in the chapter, and how many of those point at nothing.";
  "This store is asked on its own because the pointer has to be recognised in the language the explanation is written in, and only this store is written in Urdu.";
  "The rule for meeting two spellings as one word is fetched rather than named here, so this door and the gate that watches the same store cannot come to disagree about what counts as met.";
  let word_key_read = gloss_store_word_key_read(
    app_en_learn_bible_gloss_urdu_generate,
  );
  let found = await gloss_chapters_pointers_dangling(
    app_en_learn_bible_gloss_urdu_generate,
    app_en_learn_bible_gloss_urdu_explain_pointer_is,
    word_key_read,
  );
  return found;
}
