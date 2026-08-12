import { bible_folders_sentence_end_unmarked } from "./bible_folders_sentence_end_unmarked.mjs";
import { bible_sentence_end_marks_path } from "./bible_sentence_end_marks_path.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
export async function bible_sentence_end_marks_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every bible this repo ships has been read, and the ones whose sentences cannot be found are exactly the ones named as such.");
  ("A page that carries a reading on to the end of a sentence asks every language the reader chose whether this verse finished one. A bible that writes its full stop in a mark nobody here has met answers no every time, so that page reaches for one more verse over and over until whatever bound it holds runs out - and what the reader gets is twenty-five verses where they asked for one, with nothing anywhere saying why.");
  ("Nothing about adding a bible asks that question. So the answer is measured for every bible on the list and kept in a file, and this refuses a bible that is on the list and not in the file. A new language then arrives loud instead of arriving as a page that quietly gives too much.");
  ("This reads only the file. The measuring reaches the network and is a command somebody runs; the checking has to run wherever the rest of the gates run.");
  let path = bible_sentence_end_marks_path();
  let recorded = await file_read_json(path);
  let languages = ebible_languages();
  let property_name = bible_folder_key();
  let shipped = list_map_property(languages, property_name);
  let measured = list_map_property(recorded, property_name);
  let unmeasured = list_difference(shipped, measured);
  let departed = list_difference(measured, shipped);
  ("A bible nothing could be read from is told apart from one read and found to write no marks, because only the second is a fact about a language. The first is an errand that failed - a folder named wrongly, or a chapter that is not there - and reading it as a language without sentences is exactly the mistake the first hand measurement made with Urdu.");
  function lambda(entry) {
    let read = property_get(entry, "read");
    let none = equal(read, 0);
    return none;
  }
  let unread = list_filter(recorded, lambda);
  function lambda2(entry) {
    let ended = property_get(entry, "ended");
    let none = equal(ended, 0);
    return none;
  }
  let ended_none = list_filter(recorded, lambda2);
  let unfindable = list_map_property(ended_none, property_name);
  let named = bible_folders_sentence_end_unmarked();
  let unnamed = list_difference(unfindable, named);
  let named_wrongly = list_difference(named, unfindable);
  let f_name = fn_name("bible_sentence_end_marks_write");
  list_empty_is_assert_json(unmeasured, {
    hint: text_combine_multiple([
      "a bible is shipped that has never been read for how it ends a sentence - read them all with ",
      f_name,
      ", which reaches the network and rewrites the record",
    ]),
    unmeasured,
  });
  let f_name2 = fn_name("bible_sentence_end_marks_write");
  list_empty_is_assert_json(departed, {
    hint: text_combine_multiple([
      "the record holds a bible this repo no longer ships - write it again with ",
      f_name2,
      " so what is checked is what is here",
    ]),
    departed,
  });
  let f_name3 = fn_name("ebible_languages");
  let f_name4 = fn_name("bible_sentence_end_marks_write");
  list_empty_is_assert_json(unread, {
    hint: text_combine_multiple([
      "not one verse of this bible could be read, so nothing is known about how it ends a sentence and the record only looks like it says so - check the folder name against ",
      f_name3,
      ", then read them again with ",
      f_name4,
    ]),
    unread,
  });
  let f_name5 = fn_name("bible_verse_end_suffixes");
  let f_name6 = fn_name("bible_folders_sentence_end_unmarked");
  list_empty_is_assert_json(unnamed, {
    hint: text_combine_multiple([
      "this bible was read and not one of its verses ended on a mark known here, so anything waiting for one of its sentences to finish waits until it gives up. The record says beside it what its verses did end on: if one of those is its full stop, add that mark to ",
      f_name5,
      "; if it truly writes none, name it in ",
      f_name6,
      " so it is left out of the asking rather than answered no",
    ]),
    unnamed,
    ended_none,
  });
  let f_name7 = fn_name("bible_folders_sentence_end_unmarked");
  list_empty_is_assert_json(named_wrongly, {
    hint: text_combine_multiple([
      "this bible is named as one whose sentences cannot be found, and it was read finishing them - so its readers are being denied a whole reading they could have had. Take it out of ",
      f_name7,
    ]),
    named_wrongly,
  });
  let r = {
    checked: list_size(shipped),
    unmeasured,
    departed,
    unread,
    unnamed,
    named_wrongly,
  };
  return r;
}
