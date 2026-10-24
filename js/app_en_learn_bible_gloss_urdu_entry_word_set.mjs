import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_chapter_entry_word_set } from "./gloss_chapter_entry_word_set.mjs";
export async function app_en_learn_bible_gloss_urdu_entry_word_set(
  chapter_code,
  verses,
  at,
  word,
) {
  "Spell the English word one explanation in the store that teaches English through Urdu stands under the way it is given, leaving what it says untouched.";
  "$plain chapter_code";
  "the code is a chapter's name, like GEN23, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "$plain verses";
  "the verses are a passage's verse numbers joined by commas, the way the chapter itself names its passages. They name a place and nothing that runs.";
  "$plain word";
  "the word is the spelling to write, ordinary text shown to a reader.";
  "This corrects what is held here. Putting the corrected chapter where readers get it is a separate step.";
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let index = Number(at);
  let r = await gloss_chapter_entry_word_set(
    chapter_code,
    fn,
    verses,
    index,
    word,
  );
  return r;
}
