import { property_list_size } from "./property_list_size.mjs";
import { property_equals } from "./property_equals.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_chapters_offenders_generic } from "./gloss_chapters_offenders_generic.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { gloss_repairs_file_path } from "./gloss_repairs_file_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function gloss_repairs_word_write_generic(fn, word, explain) {
  "One settled explanation written into the handover file for a single word, against every chapter of a gloss store that holds it - the file the repair then reads, ready to run.";
  "$plain word";
  "$plain explain";
  "The chapters are found rather than handed in. A word met four hundred times is spread over a hundred chapters nobody has counted, and a list typed out by whoever is authoring is a list that is wrong the moment another chapter is written. Asking the store means the file names exactly the chapters that hold the word, and the repair's report of what it could not find then means something.";
  "It writes the file and stops there rather than repairing as well, because the file is the thing a person reads before anything is changed. Two hundred explanations are about to be overwritten with one sentence, and the chance to look at which chapters that touches is worth more than the one command it saves.";
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
  let repairs = {};
  let sightings = 0;
  function offender_read(offender) {
    let chapter_code = property_get(offender, "chapter_code");
    let count = property_list_size(offender, "found");
    sightings = add(sightings, count);
    let wanted = {};
    property_set(wanted, word, explain);
    property_set(repairs, chapter_code, wanted);
  }
  each(offenders, offender_read);
  let path = gloss_repairs_file_path(fn);
  await file_overwrite_json(path, repairs);
  let chapters = list_size(offenders);
  let r = {
    path,
    chapters,
    sightings,
  };
  return r;
}
