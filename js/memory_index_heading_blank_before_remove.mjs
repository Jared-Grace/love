import { memory_index_lines_write_removed } from "./memory_index_lines_write_removed.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_last } from "./list_last.mjs";
import { memory_index_lines } from "./memory_index_lines.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function memory_index_heading_blank_before_remove() {
  "Takes out the blank line that sits directly above each heading in the memory index, and answers how many there were.";
  ("This is the other half of ",
    fn_name("memory_index_heading_blank_after_remove"),
    ", and it was deliberately not done when that one was written: the blank above a heading was what still set the sections apart on the page once the blank below was gone, so taking it as well would have left the whole index as one unbroken run of lines.");
  ("What makes it safe to take now is that the sections are set apart another way. A heading ends in an opening brace and the last entry under it ends in a closing brace, so a group has a visible start and a visible end without spending a line on either. See ",
    fn_name("memory_index_sections_braced"),
    ", which writes those marks; run that one first, or the sections lose their edges until it runs.");
  ("The line is worth taking because the loader counts a blank exactly as dearly as an entry, and a blank names no note at all. Eighteen headings meant eighteen lines spent on nothing.");
  ("Running it twice takes nothing the second time, because a heading with no blank above it has none to take.");
  let lines = await memory_index_lines();
  let hash = "#";
  let kept = [];
  for (let line of lines) {
    let heading = text_starts_with(line, hash);
    if (heading) {
      let started = list_empty_not_is(kept);
      if (started) {
        let before = list_last(kept);
        let blank = text_empty_is(before);
        if (blank) {
          kept.pop();
        }
      }
    }
    list_add(kept, line);
  }
  let r = await memory_index_lines_write_removed(lines, kept);
  return r;
}
