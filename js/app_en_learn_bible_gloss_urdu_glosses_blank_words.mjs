import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_chapter_glosses_blank_words } from "./gloss_chapter_glosses_blank_words.mjs";
export async function app_en_learn_bible_gloss_urdu_glosses_blank_words(
  chapter_code,
) {
  "Every English word one chapter of the English-words-explained-in-Urdu store has been left without an Urdu meaning, under the verses it sits in.";
  "$plain chapter_code";
  "the code is a chapter's name, like LUK05, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  "Ask this before filling a chapter's holes. The answer is the shape the filling file is written in, so the run of words under each verse is both the work and the key it is answered by.";
  arguments_assert(arguments, 1);
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let r = await gloss_chapter_glosses_blank_words(chapter_code, fn);
  return r;
}
