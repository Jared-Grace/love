import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { ebible_letter_accounted_path } from "./ebible_letter_accounted_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { ebible_letter_accounted_spaces } from "./ebible_letter_accounted_spaces.mjs";
import { json_format_to_spaces } from "./json_format_to_spaces.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_letter_sent_mark(sent_on) {
  "$plain sent_on";
  "Turns every chapter the record is holding as waiting in a draft letter into one that was sent, on the day it went.";
  "The record is what stops a chapter being reported to eBible twice, and it can only do that if it says which chapters have actually left. A chapter still reading as a draft after the letter went is offered again to whoever writes the next one, and the second letter then repeats the first.";
  "One command over the whole record rather than an edit per chapter. The last letter carried seventy-eight of them, and seventy-eight hand edits is seventy-eight chances to leave one behind - the one left behind being exactly the chapter that gets written about twice.";
  "It refuses when it finds nothing waiting, because that is the shape of asking twice or of asking before a letter was written, and either way the day it was given is about to be recorded against a letter that did not go.";
  "Written back at the width the file is kept at rather than at whatever a plain json writer picks, because this record is read and edited by hand. A rewrite at a different width turns a change of a few lines into a diff of the whole file, and the whole file is then what a peer has to read to see what was actually decided. The width is asked for by name so that the gate holding the file to it and the command writing it cannot disagree.";
  arguments_assert(arguments, 1);
  let draft = "in the unsent draft letter";
  let sent = list_join_space(["sent", sent_on]);
  let path = ebible_letter_accounted_path();
  let parsed = await file_read_json(path);
  let accounted = property_get(parsed, "accounted");
  let names = object_property_names(accounted);
  let marked = [];
  function name_mark(name) {
    let waiting = property_equals(accounted, name, draft);
    if (waiting) {
      property_set(accounted, name, sent);
      list_add(marked, name);
    }
  }
  each(names, name_mark);
  list_empty_not_is_assert_json(marked, {
    hint: "nothing in the record was waiting in a draft letter, so there was nothing this day could be recorded against - the letter has been marked sent already, or it was never drafted",
    path,
    draft,
    sent,
  });
  let spaces = ebible_letter_accounted_spaces();
  let json = json_format_to_spaces(parsed, spaces);
  await file_overwrite(path, json);
  let count = list_size(marked);
  let r = {
    sent,
    marked: count,
  };
  return r;
}
