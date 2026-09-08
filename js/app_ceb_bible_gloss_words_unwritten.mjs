import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_words_dash_kept_distinct } from "./gloss_chapters_words_dash_kept_distinct.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_written } from "./bible_words_written.mjs";
import { list_lowered_set } from "./list_lowered_set.mjs";
import { set_includes } from "./set_includes.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_unwritten() {
  "The words the Cebuano gloss store explains that the Cebuano translation never writes standing alone.";
  "★ AN EXPLANATION IS PAINTED UNDER A WORD OF THE VERSE, SO A WORD IN THIS LIST IS AN EXPLANATION THE READER CANNOT FIND ANYTHING TO STAND IT ON. Every explained word was supposed to have come out of the passage it sits under, which is why this list should be nearly empty and why whatever is in it is worth reading one by one rather than counting. It is not the same question as the dash pieces: those are made by the reader cutting a word up, while these are words an author actually wrote down as the thing being explained.";
  "The store's own spelling is kept and the dash with it, so a word joined by a dash is asked about whole rather than in halves - the halves are a different measurement and already have one.";
  "Both sides are put into small letters before they are compared, because the translation keeps its capitals and an explanation may name a word from the middle of a sentence.";
  "The written words are asked for whole and lowered into a set afterwards, rather than asked for already lowered, because the count handed back is of the words the translation writes as it writes them. Lowering merges a name at the start of a sentence into the ordinary word beneath it, so the two numbers are not the same number and the one worth saying beside this answer is the larger.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let explained = await gloss_chapters_words_dash_kept_distinct(fn);
  let words = list_map_unique(explained, text_lower_to);
  let bible_folder = ebible_folder_cebuano();
  let written = await bible_words_written(bible_folder);
  let spelled = list_lowered_set(written);
  function unwritten_is(word) {
    let there = set_includes(spelled, word);
    let none = not(there);
    return none;
  }
  let unwritten = list_filter(words, unwritten_is);
  let r = {
    explained: list_size(words),
    written_words: list_size(written),
    unwritten: list_size(unwritten),
    words: unwritten,
  };
  return r;
}
