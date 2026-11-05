import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { function_read } from "./function_read.mjs";
import { reply_proposal_diff_whole } from "./reply_proposal_diff_whole.mjs";
import { reply_proposal_whole_added } from "./reply_proposal_whole_added.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export async function reply_proposal_drawn(proposal) {
  arguments_assert(arguments, 1);
  ("One change to the reply rules laid over the files as they stand: every line of the function it alters, signed, with any lines it names that the file no longer holds, and every new file it brings, whole.");
  ("★ THE REVIEW SCREEN AND THE APPLYING ASK THIS SAME QUESTION, AND THAT IS THE POINT OF IT BEING ONE FUNCTION. A verdict is stored as the lines a person was looking at, and the change is only applied when those lines are still the lines. Drawn twice by two hands, the text being checked could differ from the text that was shown by a single space, and every approval would then read as out of date for a reason nobody could see.");
  let f_name = property_get(proposal, "fn");
  let diff = property_get(proposal, "diff");
  let source = await function_read(f_name);
  let drawn = reply_proposal_diff_whole(source, diff);
  let names = property_get(proposal, "whole");
  let files = [];
  for (let name of names) {
    let text = await function_read(name);
    let one = {
      name: name,
      lines: reply_proposal_whole_added(text),
    };
    list_add(files, one);
  }
  ("The shortest files come first, so a reader takes in the small pieces before the longer files that use them. Files of the same length keep the order the change lists them in.");
  function file_size(file) {
    let lines = property_get(file, "lines");
    let size = list_size(lines);
    return size;
  }
  list_sort_number_mapper(files, file_size);
  let laid = {
    lines: property_get(drawn, "lines"),
    unplaced: property_get(drawn, "unplaced"),
    whole: files,
  };
  return laid;
}
