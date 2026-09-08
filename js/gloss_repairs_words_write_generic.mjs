import { property_null_is } from "./property_null_is.mjs";
import { gloss_words_drafted_file_path } from "./gloss_words_drafted_file_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_chapters_offenders_generic } from "./gloss_chapters_offenders_generic.mjs";
import { gloss_repairs_file_path } from "./gloss_repairs_file_path.mjs";
import { file_read_json_initialize } from "./file_read_json_initialize.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_repairs_words_write_generic(fn) {
  "A whole batch of newly written word explanations added to the handover file at once, against every chapter of a gloss store that holds any of them - answered for by how many sightings each word reached and which of the words written for were never found.";
  "★ ONE SWEEP FOR THE BATCH RATHER THAN ONE SWEEP FOR EACH WORD, AND THAT IS THE WHOLE REASON IT EXISTS. The single-word writer walks all four hundred and forty-nine chapters of the store to find the places one word sits in. Authoring is done in batches of ten or twenty, so that walk was being made ten or twenty times over the same unchanged store to answer questions that could all have been asked on the way past once. A run of the same command over a list is the shape this repo builds a command out of, and this is that command.";
  "It reads what to write from a file rather than taking it in, because an explanation is a sentence and a sentence carries commas and full stops - which is what an argument is taken apart on. Reading a file also leaves the batch standing afterwards to be read back and run again.";
  "What is already in the handover is kept and the batch is added beside it, the same way the single-word writer keeps it. The file is one standing pile that every Claude writing corrections adds to, and writing over it would throw away a peer's pending sentences without a word.";
  "A word found nowhere comes back by name rather than being passed over. It is almost always a misspelling, and the sentence written for it would otherwise sit in the file forever, changing nothing and reporting the same success as a word that landed.";
  "It writes the handover and stops there rather than repairing as well, for the reason the single-word writer stops: the file is what a person reads before anything in the store is changed.";
  let drafted_path = gloss_words_drafted_file_path(fn);
  let drafted = await file_read_json(drafted_path);
  let words = object_property_names(drafted);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  function entries_drafted_held(entries) {
    function entry_drafted_is(entry) {
      let spelled = property_get(entry, word_key);
      let none = property_null_is(drafted, spelled);
      let kept = not(none);
      return kept;
    }
    let held = list_filter(entries, entry_drafted_is);
    return held;
  }
  async function chapter_read(chapter_code) {
    let held = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      entries_drafted_held,
    );
    return held;
  }
  let offenders = await gloss_chapters_offenders_generic(fn, chapter_read);
  let path = gloss_repairs_file_path(fn);
  let empty = {};
  let repairs = await file_read_json_initialize(path, empty);
  let sightings = {};
  function offender_read(offender) {
    let chapter_code = property_get(offender, "chapter_code");
    let found = property_get(offender, "found");
    let standing = property_get_or_null(repairs, chapter_code);
    let none = null_is(standing);
    let wanted = none ? {} : standing;
    function entry_note(entry) {
      let spelled = property_get(entry, word_key);
      let explain = property_get(drafted, spelled);
      property_set(wanted, spelled, explain);
      let counted = property_get_or_null(sightings, spelled);
      let missing = null_is(counted);
      let before = missing ? 0 : counted;
      let after = add(before, 1);
      property_set(sightings, spelled, after);
    }
    each(found, entry_note);
    property_set(repairs, chapter_code, wanted);
  }
  each(offenders, offender_read);
  await file_overwrite_json(path, repairs);
  function word_missing_is(word) {
    let none = property_null_is(sightings, word);
    return none;
  }
  let missing = list_filter(words, word_missing_is);
  let drafted_count = list_size(words);
  let chapters = list_size(offenders);
  let r = {
    path,
    drafted: drafted_count,
    chapters,
    sightings,
    missing,
  };
  return r;
}
