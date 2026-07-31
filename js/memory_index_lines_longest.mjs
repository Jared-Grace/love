import { memory_index_lines } from "./memory_index_lines.mjs";
import { memory_index_line_length_ceiling } from "./memory_index_line_length_ceiling.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_size } from "./text_size.mjs";
import { memory_pointer_tokens } from "./memory_pointer_tokens.mjs";
import { list_first } from "./list_first.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
export async function memory_index_lines_longest() {
  "The index entries that are longer than one line may be, named by the note each points at and how long it is, longest first. Read-only.";
  "The note name rather than the line number, because a line number moves every time a peer adds an entry above it, and the name is what the next reader has to open.";
  let lines = await memory_index_lines();
  let ceiling = memory_index_line_length_ceiling();
  let opener = "- [";
  let over = [];
  for (let line of lines) {
    let entry_is = text_starts_with(line, opener);
    if (not(entry_is)) {
      continue;
    }
    let size = text_size(line);
    let long = greater_than(size, ceiling);
    if (not(long)) {
      continue;
    }
    let pointed = memory_pointer_tokens(line);
    let first = list_first(pointed);
    let told = text_combine_multiple([first, " (", size, ")"]);
    list_add(over, {
      told,
      size,
    });
  }
  function inner(a, b) {
    let difference = subtract(b.size, a.size);
    return difference;
  }
  over.sort(inner);
  function said(one) {
    let words = property_get(one, "told");
    return words;
  }
  let names = over.map(said);
  return names;
}
