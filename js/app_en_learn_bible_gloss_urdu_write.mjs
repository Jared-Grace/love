import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_passages } from "./app_en_learn_bible_gloss_urdu_passages.mjs";
import { gloss_write_generic } from "./gloss_write_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_write(
  chapter_code,
  verse_key,
  entries,
) {
  "Save one passage's English words explained in Urdu into the Urdu gloss store, under the passage the given verses name.";
  let passages_read = app_en_learn_bible_gloss_urdu_passages;
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let path = await gloss_write_generic(
    chapter_code,
    verse_key,
    entries,
    passages_read,
    fn,
  );
  return path;
}
