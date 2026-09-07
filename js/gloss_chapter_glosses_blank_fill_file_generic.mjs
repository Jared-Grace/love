import { gloss_entry_gloss_key } from "./gloss_entry_gloss_key.mjs";
import { gloss_fill_chapter_file_path } from "./gloss_fill_chapter_file_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_entry_gloss_blank_is } from "./gloss_entry_gloss_blank_is.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { error } from "./error.mjs";
import { list_get } from "./list_get.mjs";
import { gloss_entry_word_read } from "./gloss_entry_word_read.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { gloss_passage_entries_set } from "./gloss_passage_entries_set.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { file_delete } from "./file_delete.mjs";
export async function gloss_chapter_glosses_blank_fill_file_generic(
  chapter_code,
  fn,
) {
  "Give a meaning to every explanation one stored gloss chapter had left blank, from a file naming the missing meanings verse by verse, and take the file away once they are stored.";
  "$plain chapter_code";
  "the code is a chapter's name, like LUK05, chosen from the Bible's own book and chapter numbering. It names text to store and nothing that runs.";
  "★ IT FILLS THE HOLES RATHER THAN REPLACING THE CHAPTER. A chapter of a thousand explanations with two hundred blanks among them would otherwise have to be authored again whole to mend two hundred meanings, so the file carries only what was missing.";
  "The file is an object under each verse's key, holding the missing meanings in the order the blanks occur in that verse, each written as the word it belongs to and the meaning it is being given. The word is carried so the answer can be checked against the chapter rather than trusted: a fill lined up one place out would otherwise write every meaning onto the wrong word and say it worked, and that is a worse ending than the blanks.";
  "A verse the file leaves out keeps its blanks, so a chapter can be mended over as many sittings as it takes; a verse it names must answer for every blank in that verse, because a partial run cannot be told from a misaligned one.";
  "It is taken away only after the whole chapter has been written back, so a mismatch throws with the author's file still there to correct.";
  let property_name = gloss_entry_gloss_key();
  let file_path = gloss_fill_chapter_file_path(chapter_code, fn);
  let authored = await file_read_json(file_path);
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  let passages = property_get(chapter, "passages");
  let filled = 0;
  let answered = 0;
  let verse_keys = object_property_names(authored);
  function passage_fill(passage) {
    let verse_key = property_get(passage, "verse_key");
    let fills = property_get_or_null(authored, verse_key);
    if (null_is(fills)) {
      return;
    }
    answered = add(answered, 1);
    let entries = gloss_passage_entries(passage);
    let blank = list_filter(entries, gloss_entry_gloss_blank_is);
    let wanted = list_size(blank);
    let given = list_size(fills);
    let same = equal(wanted, given);
    if (not(same)) {
      let message = text_combine_multiple([
        "verse ",
        verse_key,
        " of ",
        chapter_code,
        " has ",
        wanted,
        " explanations without a meaning and the file gives ",
        given,
        " - a verse that is named has to answer for every blank in it, because a run that stops short cannot be told from one lined up wrongly",
      ]);
      error(message);
    }
    let position = 0;
    function entry_fill(entry) {
      let fill = list_get(fills, position);
      position = add(position, 1);
      let word = gloss_entry_word_read(entry);
      let spoken_for = gloss_entry_word_read(fill);
      let matched = equal(word, spoken_for);
      if (not(matched)) {
        let message = text_combine_multiple([
          "verse ",
          verse_key,
          " of ",
          chapter_code,
          " has no meaning for the word ",
          word,
          " where the file answers for ",
          spoken_for,
          " - the meanings are matched to the blanks in the order they occur, so this one is lined up wrongly and every meaning after it would land on the wrong word",
        ]);
        error(message);
      }
      let meaning = property_get(fill, property_name);
      property_set(entry, property_name, meaning);
      filled = add(filled, 1);
    }
    each(blank, entry_fill);
    gloss_passage_entries_set(passage, entries);
  }
  each(passages, passage_fill);
  let keys_named = list_size(verse_keys);
  let every = equal(keys_named, answered);
  if (not(every)) {
    let message = text_combine_multiple([
      "the file names ",
      keys_named,
      " verses of ",
      chapter_code,
      " and only ",
      answered,
      " of them are verses the chapter divides itself at - a key the chapter does not answer to would store nothing and report the same success as a stored one",
    ]);
    error(message);
  }
  let contents = json_format_to(chapter);
  await file_overwrite_uncached(path, contents);
  await file_delete(file_path);
  let r = {
    chapter_code,
    verses: keys_named,
    filled,
    taken_away: file_path,
  };
  return r;
}
