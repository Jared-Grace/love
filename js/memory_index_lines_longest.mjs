import { list_take } from "./list_take.mjs";
import { memory_index_lines } from "./memory_index_lines.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_size } from "./text_size.mjs";
import { memory_pointer_tokens } from "./memory_pointer_tokens.mjs";
import { list_first } from "./list_first.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
export async function memory_index_lines_longest() {
  "The index entries carrying the most weight, named by the note each points at and how long it is, longest first, and only the first handful. Read-only.";
  "The note name rather than the line number, because a line number moves every time a peer adds an entry above it, and the name is what the next reader has to open.";
  "Weight rather than a ceiling, because the two are different questions and only one of them was being answered. Asking which lines break a per-line limit answers nothing when the index goes over its total with every single line inside the limit - which is the state it was actually found in, and the size check then failed while naming no line at all. What a reader needs at that moment is where the bytes are, and that is the longest entries whether or not any of them is remarkable.";
  let lines = await memory_index_lines();
  let opener = "- [";
  let over = [];
  for (let line of lines) {
    let entry_is = text_starts_with(line, opener);
    if (not(entry_is)) {
      continue;
    }
    let size = text_size(line);
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
  ("Only the first handful, because the whole list sorted is the index over again and nobody reads a remedy that long. Ten is enough to see where the weight sits and few enough to act on in one sitting.");
  let heaviest = list_take(names, 10);
  return heaviest;
}
