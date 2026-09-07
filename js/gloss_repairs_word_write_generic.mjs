import { property_equals } from "./property_equals.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_chapters_offenders_generic } from "./gloss_chapters_offenders_generic.mjs";
import { gloss_repairs_file_path } from "./gloss_repairs_file_path.mjs";
import { file_read_json_initialize } from "./file_read_json_initialize.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function gloss_repairs_word_write_generic(fn, word, explain) {
  "One settled explanation added to the handover file for a single word, against every chapter of a gloss store that holds it - the file the repair then reads, ready to run.";
  "$plain word";
  "$plain explain";
  "The chapters are found rather than handed in. A word met four hundred times is spread over a hundred chapters nobody has counted, and a list typed out by whoever is authoring is a list that is wrong the moment another chapter is written. Asking the store means the file names exactly the chapters that hold the word, and the repair's report of what it could not find then means something.";
  "What is already in the file is kept and this word is added beside it. The file is one shared standing pile that every Claude writing corrections adds to, so written over rather than added to it would throw away a peer's pending sentences without a word - and they would find out by running the repair and having it change nothing.";
  "It writes the file and stops there rather than repairing as well, because the file is the thing a person reads before anything is changed. Hundreds of explanations are about to be overwritten with one sentence, and the chance to look at which chapters that touches is worth more than the one command it saves.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  function entries_word_held(entries) {
    function entry_word_is(entry) {
      let same = property_equals(entry, word_key, word);
      return same;
    }
    let held = list_filter(entries, entry_word_is);
    return held;
  }
  async function chapter_read(chapter_code) {
    let held = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      entries_word_held,
    );
    return held;
  }
  let offenders = await gloss_chapters_offenders_generic(fn, chapter_read);
  let path = gloss_repairs_file_path(fn);
  let empty = {};
  let repairs = await file_read_json_initialize(path, empty);
  let sightings = 0;
  function offender_read(offender) {
    let chapter_code = property_get(offender, "chapter_code");
    let found = property_get(offender, "found");
    let count = list_size(found);
    sightings = add(sightings, count);
    let standing = property_get_or_null(repairs, chapter_code);
    let none = null_is(standing);
    let wanted = none ? {} : standing;
    property_set(wanted, word, explain);
    property_set(repairs, chapter_code, wanted);
  }
  each(offenders, offender_read);
  await file_overwrite_json(path, repairs);
  let chapters = list_size(offenders);
  let waiting = object_property_names(repairs);
  let chapters_waiting = list_size(waiting);
  let r = {
    path,
    chapters,
    sightings,
    chapters_waiting,
  };
  return r;
}
