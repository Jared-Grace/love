import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { memory_index_lines } from "./memory_index_lines.mjs";
import { memory_index_entry_length_ceiling } from "./memory_index_entry_length_ceiling.mjs";
import { text_split } from "./text_split.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_size } from "./text_size.mjs";
import { list_add } from "./list_add.mjs";
export async function memory_index_lines_oversize() {
  "The index lines longer than the ceiling allows them, counted against what they actually carry rather than against a flat number.";
  "The ceiling is a budget for one entry: a hook is read to decide whether to open the note behind it, and a hook that keeps growing becomes the note. Most lines hold one entry, so for them the per-entry budget and the per-line budget are the same number.";
  "Some lines deliberately hold several, separated by a middle dot, and those are not a fault - a group is how a family of notes is folded down to one line when the line budget is the tight one. Measured 2026-09-09, five lines were past the flat ceiling and every one of them was a group; the worst was 128 characters an entry against a ceiling of 200. So the flat reading condemns exactly the lines that were written to save room, which is why the entries on the line are counted first and the ceiling multiplied by them.";
  "A line carrying no link at all is not an entry and is not checked here. Headings and the two lines of reading instructions at the top are prose about the index rather than hooks into it, and they answer to the whole-file size instead.";
  let lines = await memory_index_lines();
  let ceiling = memory_index_entry_length_ceiling();
  let opener = "](";
  let oversize = [];
  for (let line of lines) {
    let pieces = text_split(line, opener);
    let count = list_size(pieces);
    let entries = subtract(count, 1);
    let carries = greater_than(entries, 0);
    if (carries) {
      let characters = text_size(line);
      let allowed = multiply(ceiling, entries);
      let over = greater_than(characters, allowed);
      if (over) {
        let found = {
          line,
          entries,
          characters,
          allowed,
        };
        list_add(oversize, found);
      }
    }
  }
  let total = list_size(lines);
  let r = {
    ceiling,
    lines: total,
    oversize,
  };
  return r;
}
