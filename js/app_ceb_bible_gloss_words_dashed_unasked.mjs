import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_words_dash_kept_distinct } from "./gloss_chapters_words_dash_kept_distinct.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_written_lowered_set } from "./bible_words_written_lowered_set.mjs";
import { set_includes } from "./set_includes.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_dashed_unasked() {
  "The words holding a dash that the Cebuano gloss store explains and the dictionary has never once been asked about, and how many of them the translation writes standing alone.";
  "★ THE READING THAT ASKS ABOUT PIECES NOBODY WROTE IS THE SAME READING THAT NEVER ASKS ABOUT THE WHOLE WORD, AND ONLY THE FIRST HALF OF THAT HAD BEEN COUNTED. The queue finds its own list through a reader that cuts at every dash, so panan-awon reaches it as panan and awon and never as itself. Both halves get asked, the whole word never does, and the store ends up holding two answers about runs of letters this translation does not contain and none at all about the word it does.";
  "This is why the fix is not only a matter of asking less. A word counted here is an explanation the store carries that nothing outside it has ever checked, and no amount of dropping bad answers reaches one of them.";
  "The ones the translation writes standing alone are counted apart, because for those the question has a right answer waiting and nobody has gone and asked it.";
  "The translation's vocabulary is asked for in small letters and as a set, rather than built out of the written words here, because that is one named reading of the bible and this had a hand-made copy of it. The words asked of it all hold a dash, which is why a set may stand in for what was an ordinary object: a plain object answers to the names its own kind carries, and no such name has a dash in it.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let explained = await gloss_chapters_words_dash_kept_distinct(fn);
  let lowered = list_map_unique(explained, text_lower_to);
  function dashed_is(word) {
    let held = text_includes(word, "-");
    return held;
  }
  let dashed = list_filter(lowered, dashed_is);
  let known = await binisaya_words_known();
  function unasked_is(word) {
    let held = property_get_or_null(known, word);
    let none = null_is(held);
    return none;
  }
  let unasked = list_filter(dashed, unasked_is);
  let bible_folder = ebible_folder_cebuano();
  let vocabulary = await bible_words_written_lowered_set(bible_folder);
  function written_is(word) {
    let there = set_includes(vocabulary, word);
    return there;
  }
  let real = list_filter(unasked, written_is);
  let r = {
    explained: list_size(lowered),
    dashed: list_size(dashed),
    unasked: list_size(unasked),
    written_alone: list_size(real),
    words: real,
  };
  return r;
}
