import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_add } from "./list_add.mjs";
export function memory_index_lines_brace_marked(bare, hash, open, ends, close) {
  arguments_assert(arguments, 5);
  ("The memory index's stripped lines with the braces written back on: an opening one closing every heading, and a closing one on each line named as a section's end.");
  ("The ends arrive already found rather than being looked for here. A line is the last of its section only because the next heading came after it, so a walk that marked as it read would have to hold the previous line back until it knew - and this walk holds nothing.");
  let marked = [];
  let at = 0;
  for (let line of bare) {
    let heading = text_starts_with(line, hash);
    let written = line;
    if (heading) {
      written = line + open;
    }
    if (ends.includes(at)) {
      written = line + close;
    }
    list_add(marked, written);
    at = at + 1;
  }
  return marked;
}
