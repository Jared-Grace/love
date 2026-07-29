import { memory_folder } from "./memory_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { memory_index_line_count_ceiling } from "./memory_index_line_count_ceiling.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export async function memory_index_lines_gate_run() {
  "Fails when the memory index holds more lines than it can be loaded whole at, which is the second half of a budget the size gate only measured one half of.";
  "The loader cuts the index on whichever limit it meets first. The size gate watches the bytes, and on the day this was written the index sat under that ceiling and over this one - green while every session for days had been recalling an index with its last thirteen entries missing. A budget with two limits and one check reads as safe exactly when it is not.";
  "The way out is not the way out of the size gate, which is why this is a gate of its own. Shortening lines buys bytes and no lines at all; what buys a line is one entry ceasing to need its own line - a note the index already names declaring it under a Children heading, so the hooks live in that note and the index keeps the one pointer that reaches them.";
  let folder = memory_folder();
  let name = "MEMORY.md";
  let path = path_join([folder, name]);
  let text = await file_read(path);
  let lines = text.split("\n");
  let count = list_size(lines);
  let ceiling = memory_index_line_count_ceiling();
  let over = greater_than(count, ceiling);
  if (not(over)) {
    let fine = {
      count,
      ceiling,
      over: false,
    };
    return fine;
  }
  let message = text_combine_multiple([
    "memory index lines gate: the index is ",
    count,
    " lines and may be ",
    ceiling,
    " - move a group of entries under a Children heading in a note the index already names, which is what turns several lines into one",
  ]);
  throw new Error(message);
}
