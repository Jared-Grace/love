import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_add } from "./list_add.mjs";
export function memory_index_lines_brace_marked(bare, hash, open, ends, close) {
  arguments_assert(arguments, 5);
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
