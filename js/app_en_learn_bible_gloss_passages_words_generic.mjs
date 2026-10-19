import { arguments_assert } from "./arguments_assert.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passage_words_text_first } from "./gloss_passage_words_text_first.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { gloss_passage_words_bare } from "./gloss_passage_words_bare.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
export async function app_en_learn_bible_gloss_passages_words_generic(
  chapter_code,
  passages_read,
) {
  "The passages of one chapter handed over ready to author against, whichever language the English is being explained in: each one carrying the key it must be filed under, its texts, the English words already cut the way the store cuts them, and how many of those words there are.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  "★ THE COUNT IS THE POINT, AND IT IS THE ONE THING AN AUTHOR CANNOT GET RIGHT BY EYE. An entry is stored per word, and the alignment gate lays the entries beside the passage's own words, so a passage of twenty-four words needs twenty-four entries. The cutting is by punctuation and not by space, so a possessive is two words and a hyphenated number is two words - which is exactly where eye-counting goes wrong.";
  "The words are the same whatever the language explaining them, because they are the English ones; only the second text differs, and that is what the passages handed in decide.";
  arguments_assert(arguments, 2);
  let passages = await passages_read(chapter_code);
  function passage_read(passage) {
    let verse_key = g_sermon_passage_verses_key(passage);
    let texts = property_get(passage, "texts");
    let written = gloss_passage_words_text_first(passage);
    let english = list_join_space(written);
    let words = gloss_passage_words_bare(
      passage,
      gloss_passage_words_text_first,
    );
    let words_size = list_size(words);
    let read = {
      verse_key,
      words_size,
      english,
      words,
      texts,
    };
    return read;
  }
  let r = list_map(passages, passage_read);
  return r;
}
