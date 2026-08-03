import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { subtract } from "./subtract.mjs";
import { and } from "./and.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { list_add } from "./list_add.mjs";
import { list_last } from "./list_last.mjs";
import { memory_index_lines } from "./memory_index_lines.mjs";
import { memory_index_path } from "./memory_index_path.mjs";
import { not } from "./not.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function memory_index_heading_blank_after_remove() {
  "Takes out the blank line that sits directly under each heading in the memory index, and answers how many there were.";
  "The index is loaded whole up to a number of lines, and the loader counts a blank one exactly as dearly as an entry - so an empty line under a heading costs a pointer to a note and carries nothing at all. On the day this was written the index stood at a hundred and ninety-two lines against a ceiling of a hundred and ninety-two, which is the next note anybody writes going missing without a word.";
  "Only the blank under a heading goes. The one above it stays, so the sections are still set apart on the page and the file reads the way it did; and a list written straight under a heading is the same list to every reader of the marks.";
  "This is not the way out the line gate names, and it is not meant to be. Moving a group of entries under a Children heading in a note is what makes an index carry more than it has lines for; this only stops the lines being spent on nothing, which is worth doing first because it costs no judgment about what any note is for.";
  "Running it twice takes nothing the second time, because a heading with no blank under it has none to take.";
  let lines = await memory_index_lines();
  let hash = "#";
  let kept = [];
  ("the first line has nothing before it, so there is no heading it could be sitting under - asking for the last of an empty list is the one thing that would throw here rather than answer");
  for (let line of lines) {
    let started = list_empty_not_is(kept);
    let blank = text_empty_is(line);
    let after_something = and(started, blank);
    let heading = false;
    if (after_something) {
      let before = list_last(kept);
      heading = text_starts_with(before, hash);
    }
    if (not(heading)) {
      list_add(kept, line);
    }
  }
  let rebuilt = kept.join("\n");
  let path = memory_index_path();
  await file_overwrite(path, rebuilt);
  let removed = subtract(lines.length, kept.length);
  let r = {
    removed,
  };
  return r;
}
