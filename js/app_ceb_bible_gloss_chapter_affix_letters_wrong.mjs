import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_chapter_affix_letters_wrong } from "./gloss_chapter_affix_letters_wrong.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_chapter_affix_letters_wrong(
  chapter_code,
) {
  "The Cebuano explanations in one chapter that quote letters for a piece of their word which the dictionary gives no piece of that kind holding, with what each one said beside what the dictionary gives.";
  "This is where the prose is read. The count over the whole store says how big the fault is and nothing about what it looks like, and a repair cannot be written from a number.";
  "$plain chapter_code";
  "the code is a chapter's name, like PSA001. It names a store entry and nothing that runs.";
  let known = await binisaya_words_known();
  let found = await gloss_chapter_affix_letters_wrong(
    chapter_code,
    app_ceb_bible_gloss_generate,
    known,
  );
  let count = list_size(found);
  let r = {
    chapter_code,
    count,
    found,
  };
  return r;
}
