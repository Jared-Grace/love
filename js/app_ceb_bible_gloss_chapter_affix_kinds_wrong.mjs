import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_chapter_affix_kinds_wrong } from "./gloss_chapter_affix_kinds_wrong.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_chapter_affix_kinds_wrong(
  chapter_code,
) {
  "Every Cebuano explanation in one chapter that calls a piece of its word by a name the dictionary gives no piece of.";
  "$plain chapter_code";
  "the code is a chapter's name, like PRO22, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "This is the third of three questions asked of a chapter and it is the last one to become answerable, because until the construction was being handed over there was nothing to grade an explanation against. The other two ask whether the root is right and whether the word was given as its own origin; this one asks whether what the explanation says was done to that root is what the dictionary says was done to it.";
  let known = await binisaya_words_known();
  let found = await gloss_chapter_affix_kinds_wrong(
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
