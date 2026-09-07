import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_words_dash_kept_distinct } from "./gloss_chapters_words_dash_kept_distinct.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_written } from "./bible_words_written.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_unwritten() {
  "The words the Cebuano gloss store explains that the Cebuano translation never writes standing alone.";
  "★ AN EXPLANATION IS PAINTED UNDER A WORD OF THE VERSE, SO A WORD IN THIS LIST IS AN EXPLANATION THE READER CANNOT FIND ANYTHING TO STAND IT ON. Every explained word was supposed to have come out of the passage it sits under, which is why this list should be nearly empty and why whatever is in it is worth reading one by one rather than counting. It is not the same question as the dash pieces: those are made by the reader cutting a word up, while these are words an author actually wrote down as the thing being explained.";
  "The store's own spelling is kept and the dash with it, so a word joined by a dash is asked about whole rather than in halves - the halves are a different measurement and already have one.";
  "Both sides are put into small letters before they are compared, because the translation keeps its capitals and an explanation may name a word from the middle of a sentence.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let explained = await gloss_chapters_words_dash_kept_distinct(fn);
  let words = list_map_unique(explained, text_lower_to);
  let bible_folder = ebible_folder_cebuano();
  let written = await bible_words_written(bible_folder);
  let spelled = {};
  function written_hold(word) {
    let lowered = text_lower_to(word);
    property_set(spelled, lowered, true);
  }
  each(written, written_hold);
  function unwritten_is(word) {
    let held = property_get_or_null(spelled, word);
    let none = null_is(held);
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
