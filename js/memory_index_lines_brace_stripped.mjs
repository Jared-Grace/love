import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_add } from "./list_add.mjs";
export function memory_index_lines_brace_stripped(lines, open, close) {
  arguments_assert(arguments, 3);
  let bare = [];
  for (let line of lines) {
    let opened = text_ends_with(line, open);
    let closed = text_ends_with(line, close);
    let stripped = line;
    if (opened) {
      stripped = line.slice(0, -2);
    }
    if (closed) {
      stripped = line.slice(0, -2);
    }
    list_add(bare, stripped);
  }
  return bare;
}
