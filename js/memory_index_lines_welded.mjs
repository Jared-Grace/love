import { memory_index_lines } from "./memory_index_lines.mjs";
import { text_split } from "./text_split.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export async function memory_index_lines_welded() {
  "The index lines that carry a second entry opener, which is always two entries joined into one line with the newline between them lost.";
  "An index line is one entry, and a line that deliberately carries several separates them with a middle dot. Nothing ever writes the list opener twice on purpose, so a second one is never a style choice - it is the newline that an empty replacement ate.";
  "This is worth its own gate because the damage is silent twice over. The entry behind the weld keeps its link and its hook, so every link check still passes and every pointer still resolves; it simply stops being a line a reader's eye can land on. And the size gate ranks lines by weight, so a welded pair rises to the top of its offender list and asks for the hook to be shortened, which is advice to edit a defect rather than repair it.";
  let lines = await memory_index_lines();
  let opener = "- [";
  let welded = [];
  for (let line of lines) {
    let pieces = text_split(line, opener);
    let count = list_size(pieces);
    let joined = greater_than(count, 2);
    if (joined) {
      list_add(welded, line);
    }
  }
  let size = list_size(lines);
  let r = {
    lines: size,
    welded,
  };
  return r;
}
