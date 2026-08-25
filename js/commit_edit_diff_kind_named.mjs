import { list_map_property } from "./list_map_property.mjs";
import { placed_lines_of_kind } from "./placed_lines_of_kind.mjs";
import { diff_lines_function_written_is } from "./diff_lines_function_written_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { kinds_all_is } from "./kinds_all_is.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { commit_edit_callee_swap_is } from "./commit_edit_callee_swap_is.mjs";
import { list_first } from "./list_first.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function commit_edit_diff_kind_named(placed) {
  "What one commit's change amounts to, in a few words a person can read down a list of - imports only, prose only, one line added, one call swapped for another, several lines.";
  "A log of commits is read to find the ones worth opening, and a commit that only moved imports about or only reworded a sentence is not one of them. Those two are the commonest kind in this repo, because the canonicalizing pass writes imports on almost every commit, so saying so in three words is most of what the reading is for.";
  "Lines that are prose or imports are set aside first and the words are chosen from what is left, which is why a commit touching thirty import lines and one line of code is called one line of code. Counting the lines rather than the kinds would have called it a large change and hidden the only part anybody needs to look at.";
  "Two lines of code, one taken out and one put in, is looked at once more: where the two differ only in which function is being called, that is worth saying, because it is the shape almost every routing and renaming commit takes and it is always safe to skip.";
  "A VALUE CHOSEN IS SET ASIDE WITH THE OTHER TWO. A number raised in a record or a colour picked is hand-made and always will be, so it is no more a line worth opening than a reworded sentence is, and counting it as program called every such commit several lines of code. It gets a name of its own rather than joining the prose, because a person scanning the log for what changed wants to know which of the two it was.";
  "A NAME STANDING ALONE GETS A NAME OF ITS OWN AND SAYS SO. An entry added to a register, a part written into a record and an argument of a call broken over several lines are all written as one name and a comma, so a commit made only of those lines cannot be placed by the lines; naming the doubt is honest, and folding it into the bucket beside it would have had that bucket claim the change was imports and values when it was neither.";
  "A WHOLE NEW FUNCTION IS SAID SO RATHER THAN COUNTED AS SEVERAL LINES OF PROGRAM. It reads as the largest bucket there is and is the one shape this repo has had a command for the longest, so a reader scanning for what no command covers was being handed the covered work first. It is asked after the lines have been sorted and before their number is looked at, because the number is the thing it is there to stop being trusted.";
  "THE LINES ARRIVE ALREADY CARRYING THEIR KINDS AND ARE NOT READ AGAIN HERE. They used to arrive as two lists side by side, and this then worked the kinds out a second time from the lines to pick the program out of them - which threw away every kind the file had settled and put the line's own undecided answer back. One list of lines each holding its kind cannot come apart that way.";
  arguments_assert(arguments, 1);
  let kinds = list_map_property(placed, "kind");
  let changed = list_map_property(placed, "line");
  let only_import = kinds_all_is(kinds, "import");
  if (only_import) {
    let r = "imports only (the canonicalizing pass)";
    return r;
  }
  let only_comment = kinds_all_is(kinds, "comment");
  if (only_comment) {
    let r2 = "comment prose only";
    return r2;
  }
  let only_data = kinds_all_is(kinds, "data");
  if (only_data) {
    let r9 = "values chosen only";
    return r9;
  }
  let only_alone = kinds_all_is(kinds, "name alone");
  if (only_alone) {
    let r10 = "names or numbers standing alone, values or program";
    return r10;
  }
  let code = placed_lines_of_kind(placed, "code");
  let size = list_size(code);
  let none = equal(size, 0);
  if (none) {
    let r3 = "comment, values, names alone and imports only";
    return r3;
  }
  let written = diff_lines_function_written_is(changed);
  if (written) {
    let r11 = "a whole new function written";
    return r11;
  }
  let pair = equal(size, 2);
  if (pair) {
    let swapped = commit_edit_callee_swap_is(code);
    if (swapped) {
      let r4 = "one call, different function put in its place";
      return r4;
    }
    let r5 = "one line of code replaced";
    return r5;
  }
  let single = equal(size, 1);
  if (single) {
    let first = list_first(code);
    let put_in = text_starts_with(first, "+");
    if (put_in) {
      let r6 = "one line of code added";
      return r6;
    }
    let r7 = "one line of code removed";
    return r7;
  }
  let r8 = "several lines of code";
  return r8;
}
