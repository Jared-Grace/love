import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { binisaya_word_root_key } from "./binisaya_word_root_key.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_chapter_read } from "./gloss_chapter_read.mjs";
import { list_size } from "./list_size.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_ceb_bible_gloss_chapter_claims_generic(
  chapter_code,
  lambda_claims,
) {
  "One authored Cebuano chapter opened, its dictionary read, and its explanations asked whatever the caller came to ask - answered with the chapter's name, how many the reading found, and the findings themselves.";
  "$plain chapter_code";
  "the code is a chapter's name, like PRO31, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "Words are matched on their root rather than on their spelling, because the explanations say both kinds of thing - this word stands again in verse fifteen, and this word's root gave the word for food in verse fourteen - and only the root answers both. Matching spellings would call every one of the second kind wrong.";
  "The Cebuano wording is the first of a passage's texts, and it is the one the explanations were written against. The English standing beside it is a translation for the reader and no word explanation is about it.";
  "The dictionary is read once and serves the whole chapter, which is the slow part of any of these readings and the reason they share an opening at all.";
  "A chapter nobody has authored yet answers with nothing found, so a sweep crosses the gaps without being told where they are.";
  let chapter = await gloss_chapter_read(
    chapter_code,
    app_ceb_bible_gloss_generate,
  );
  let found = [];
  if (null_is(chapter)) {
    let none = {
      chapter_code,
      count: 0,
      found,
    };
    return none;
  }
  let known = await binisaya_words_known();
  function word_key_read(word) {
    let key = binisaya_word_root_key(known, word);
    return key;
  }
  let passages = property_get(chapter, "passages");
  let text_index = 0;
  found = lambda_claims(passages, text_index, word_key_read);
  let count = list_size(found);
  let r = {
    chapter_code,
    count,
    found,
  };
  return r;
}
