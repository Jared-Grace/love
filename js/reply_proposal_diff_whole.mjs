import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_take } from "./text_take.mjs";
import { equal } from "./equal.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_indent_size } from "./text_indent_size.mjs";
import { text_repeated } from "./text_repeated.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_add } from "./list_add.mjs";
export function reply_proposal_diff_whole(source, diff) {
  arguments_assert(arguments, 2);
  ("A written-down change laid over the whole file it lands in, so what is on the screen is the file and not an extract of it. Every line of the file comes through; the ones the change takes away are marked, the ones it brings are put where they belong, and everything else stands as it is.");
  ("★ AN EXTRACT CANNOT BE CHECKED, IT CAN ONLY BE BELIEVED. A few lines either side of a change say what the change is and say nothing about what else is in the file, so a reader who wants to know whether anything ELSE is going on has to go and open the file - which is the whole thing this screen exists to avoid. Shown whole, the answer to what else is going on is on the screen already.");
  ("★ THE FILE'S OWN TEXT IS WHAT IS DRAWN, NOT THE TEXT THE CHANGE WAS WRITTEN WITH. The change only says which lines; the letters and the indentation come from the file every time it is looked at. So a line that was tidied up in the file after the change was written shows as it really is now rather than as it was then, and a change written against a file that has moved cannot quietly draw the old file.");
  ("★ THE LINES THE CHANGE BRINGS ARE THE ONE PART WITH NO FILE TEXT TO DRAW, so they are moved sideways to sit with the lines they land among. A change is usually written out at whatever depth read comfortably at the time, and once it is laid over the real file the lines around it are at the file's depth instead - so a brought line left exactly as written would be the only crooked line on the screen, and would read as a mistake in the change rather than in the drawing. The sideways move is measured at the last line that was placed, so it follows the file wherever the change has got to.");
  ("Lines the change names and the file no longer holds are handed back separately rather than dropped. A change that has gone stale must say so on the screen; drawing it as though it applied cleanly would be the one failure nobody could see.");
  let file_lines = text_split_newline(source);
  let lines = [];
  let unplaced = [];
  let i = 0;
  let shift = 0;
  for (let entry of diff) {
    let sign = text_take(entry, 1);
    let added = equal(sign, "+");
    if (added) {
      let brought = text_slice_from(entry, 1);
      let want = text_indent_size(brought) + shift;
      if (less_than(want, 0)) {
        want = 0;
      }
      let moved = "+" + text_repeated(" ", want) + text_trim(brought);
      list_add(lines, moved);
      continue;
    }
    let removed = equal(sign, "-");
    let rest = entry;
    if (removed) {
      rest = text_slice_from(entry, 1);
    }
    let body = text_trim(rest);
    let found = null;
    let k = i;
    while (less_than(k, file_lines.length)) {
      let one = text_trim(file_lines[k]);
      if (equal(one, body)) {
        found = k;
        break;
      }
      k = k + 1;
    }
    if (equal(found, null)) {
      list_add(unplaced, entry);
      continue;
    }
    let f = i;
    while (less_than(f, found)) {
      list_add(lines, " " + file_lines[f]);
      f = f + 1;
    }
    let mark = " ";
    if (removed) {
      mark = "-";
    }
    let placed = file_lines[found];
    list_add(lines, mark + placed);
    let left = text_indent_size(placed);
    let right = text_indent_size(rest);
    shift = subtract(left, right);
    i = found + 1;
  }
  let t = i;
  while (less_than(t, file_lines.length)) {
    list_add(lines, " " + file_lines[t]);
    t = t + 1;
  }
  let whole = {
    lines,
    unplaced,
  };
  return whole;
}
