import { list_size_equal } from "./list_size_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { equal_not } from "./equal_not.mjs";
import { add } from "./add.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { subtract } from "./subtract.mjs";
import { text_trim } from "./text_trim.mjs";
export function memory_index_entry_hook_or_null(line, stem) {
  arguments_assert(arguments, 2);
  ("The hook of the one memory index entry that points at a note, or null when this line is not an entry that may be moved off the index. Read-only, pure.");
  ("★ NULL SAYS BOTH 'NOT THIS NOTE' AND 'NOT SAFE TO MOVE', AND THE CALLER TELLS THEM APART BY COUNTING RATHER THAN BY ASKING AGAIN. A line that names this note and another one as well is a grouped entry: dropping it would take the other note's only pointer away with it, and a note nothing points at is a note nobody opens again. So a caller that finds the stem written on a line and is handed null here has been told to stop, not to try harder.");
  ("The trailing brace is left behind because it belongs to the index rather than to the note. The braces mark where a section of the index begins and ends, they are stripped and re-marked from scratch after any tidy, and carrying one into a hub note would drop a stray bracket into the middle of that note's prose where nothing would ever take it out again.");
  let target = list_join_empty(["](", stem, ".md"]);
  let names = text_includes(line, target);
  if (not(names)) {
    return null;
  }
  let entry = text_starts_with(line, "- [");
  if (not(entry)) {
    return null;
  }
  let pieces = line.split("](");
  let alone = list_size_equal(pieces, 2);
  if (not(alone)) {
    return null;
  }
  let dash = " — ";
  let at = line.indexOf(dash);
  let hooked = equal_not(at, -1);
  if (not(hooked)) {
    return null;
  }
  let sum = add(at, dash.length);
  let hook = line.slice(sum);
  let braced = text_ends_with(hook, "}");
  if (braced) {
    let difference = subtract(hook.length, 1);
    hook = hook.slice(0, difference);
  }
  let trimmed = text_trim(hook);
  return trimmed;
}
