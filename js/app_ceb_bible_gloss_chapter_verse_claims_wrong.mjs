import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { binisaya_word_root_key } from "./binisaya_word_root_key.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapter_read } from "./gloss_chapter_read.mjs";
import { gloss_passages_verse_claims_wrong } from "./gloss_passages_verse_claims_wrong.mjs";
import { list_size } from "./list_size.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_ceb_bible_gloss_chapter_verse_claims_wrong(
  chapter_code,
) {
  "Every Cebuano word explanation in one chapter that names a verse holding no word built on the same root.";
  "$plain chapter_code";
  "the code is a chapter's name, like PRO31, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "This asks a different question from the three measures beside it. Those read a word against a dictionary; this reads a sentence against the chapter it was written about, so it finds a claim that is false rather than an explanation that is thin.";
  "Words are matched on their root rather than on their spelling, because the explanations say both kinds of thing - this word stands again in verse fifteen, and this word's root gave the word for food in verse fourteen - and only the root answers both. Matching spellings would call every one of the second kind wrong.";
  "The Cebuano wording is the first of a passage's texts, and it is the one the explanations were written against. The English standing beside it is a translation for the reader and no word explanation is about it.";
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
  found = gloss_passages_verse_claims_wrong(
    passages,
    text_index,
    word_key_read,
  );
  let count = list_size(found);
  let r = {
    chapter_code,
    count,
    found,
  };
  return r;
}
