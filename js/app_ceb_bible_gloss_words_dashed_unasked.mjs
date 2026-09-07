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
import { bible_words_written } from "./bible_words_written.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_dashed_unasked() {
  "The words holding a dash that the Cebuano gloss store explains and the dictionary has never once been asked about, and how many of them the translation writes standing alone.";
  "★ THE READING THAT ASKS ABOUT PIECES NOBODY WROTE IS THE SAME READING THAT NEVER ASKS ABOUT THE WHOLE WORD, AND ONLY THE FIRST HALF OF THAT HAD BEEN COUNTED. The queue finds its own list through a reader that cuts at every dash, so panan-awon reaches it as panan and awon and never as itself. Both halves get asked, the whole word never does, and the store ends up holding two answers about runs of letters this translation does not contain and none at all about the word it does.";
  "This is why the fix is not only a matter of asking less. A word counted here is an explanation the store carries that nothing outside it has ever checked, and no amount of dropping bad answers reaches one of them.";
  "The ones the translation writes standing alone are counted apart, because for those the question has a right answer waiting and nobody has gone and asked it.";
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
  let written = await bible_words_written(bible_folder);
  let spelled = {};
  function written_hold(word) {
    let word_lowered = text_lower_to(word);
    property_set(spelled, word_lowered, true);
  }
  each(written, written_hold);
  function written_is(word) {
    let held = property_get_or_null(spelled, word);
    let b = null_is(held);
    let there = not(b);
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
