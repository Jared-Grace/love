import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export function memory_frontmatter_lines(text) {
  "The header block at the top of a memory file - the lines between the opening fence and the one that closes it. Empty list when the file does not open with a fence, because a file without a header has no fields to read and guessing at one would find whatever the prose happened to say.";
  "The body is left out on purpose. A note about how memory files are written can quote a field line in its own prose, and a reader that scanned the whole file would take that quotation for the file's own header.";
  let fence = "---";
  let lines = text.split("\n");
  let first = lines[0];
  let opens = equal(first, fence);
  if (not(opens)) {
    let empty = [];
    return empty;
  }
  let header = [];
  let index = 1;
  while (less_than(index, lines.length)) {
    let line = lines[index];
    let closes = equal(line, fence);
    if (closes) {
      return header;
    }
    list_add(header, line);
    index = index + 1;
  }
  let unclosed = [];
  return unclosed;
}
