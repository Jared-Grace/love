import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_letter_accounted_path } from "./ebible_letter_accounted_path.mjs";
import { file_read } from "./file_read.mjs";
import { json_parse_try } from "./json_parse_try.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
import { ebible_letter_accounted_spaces } from "./ebible_letter_accounted_spaces.mjs";
import { json_format_to_spaces } from "./json_format_to_spaces.mjs";
import { text_lines_first_difference } from "./text_lines_first_difference.mjs";
import { null_is_assert_json } from "./null_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_letter_accounted_gate_run() {
  "QA gate: the record of what has already been said to eBible still parses as json, and is still laid out at the width it is kept at.";
  "Both halves are failures that happened. A command written to keep the file tidy took its width from the command line, where a number arrives as a word, and indented every level with the character 1 instead of a space - the file stopped being json at all, and a peer committed it in that state before anybody noticed. A second command wrote the same file back at a json writer's own default and flattened it, losing nothing but turning every later change of two lines into a diff of the whole file.";
  "Neither went red anywhere, and this is the only file where that matters this much: it is the single thing standing between a chapter and being reported to eBible twice, and nothing reads it until somebody sits down to write the next letter.";
  "The width is asked for by name rather than measured off the file, because a file damaged by a rewrite would otherwise be found to agree with itself.";
  "The two texts are compared a line at a time, and a side that has run out of lines reads as an empty one - so a newline left on the end by an editor is not a complaint, while a level indented differently is.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let path = ebible_letter_accounted_path();
  let text = await file_read(path);
  let parsed = json_parse_try(text);
  null_not_is_assert_json(parsed, {
    hint: "the record of what has been said to eBible no longer parses as json, so nothing can read it and the next letter would be written with no idea what the last one carried - look for a rewrite that indented with something other than spaces",
    path,
  });
  let spaces = ebible_letter_accounted_spaces();
  let want = json_format_to_spaces(parsed, spaces);
  let difference = text_lines_first_difference(text, want);
  null_is_assert_json(difference, {
    hint: "the record of what has been said to eBible is no longer laid out at the width it is kept at - a command wrote it back at a json writer's own default, and every later change of a line now reads as a change of the whole file",
    path,
    spaces,
    difference,
  });
  let accounted = property_get(parsed, "accounted");
  let names = object_property_names(accounted);
  let count = list_size(names);
  let r = {
    accounted: count,
  };
  return r;
}
