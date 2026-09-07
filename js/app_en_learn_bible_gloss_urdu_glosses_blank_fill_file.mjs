import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_chapter_glosses_blank_fill_file_generic } from "./gloss_chapter_glosses_blank_fill_file_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_glosses_blank_fill_file(
  chapter_code,
) {
  "Give an Urdu meaning to every word one stored chapter of the English-words-explained-in-Urdu store had been left without, from one file naming them verse by verse.";
  "$plain chapter_code";
  "the code is a chapter's name, like LUK05, chosen from the Bible's own book and chapter numbering. It names text to store and nothing that runs.";
  "The file is written with the Write tool, which needs no prompt; this one reads it and stores it, and what it does is the same whatever it is asked for, so it is safe to grant.";
  arguments_assert(arguments, 1);
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let r = await gloss_chapter_glosses_blank_fill_file_generic(chapter_code, fn);
  return r;
}
