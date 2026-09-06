import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { assert_json } from "./assert_json.mjs";
import { equal_not } from "./equal_not.mjs";
import { add } from "./add.mjs";
import { text_trim_right } from "./text_trim_right.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function memory_hub_children_add(hub_text, lines) {
  arguments_assert(arguments, 2);
  ("A hub note with more lines written into its '## Children' section, given the note as it stands and the lines to add. Pure - what is on disk is untouched, and the answer is the note the caller should write.");
  ("★ THE SECTION IS FOUND THE WAY THE READER OF IT FINDS IT - the heading, then everything up to the next '## ' heading or the end of the note - so what this writes into is exactly what ",
    fn_name("memory_hub_children"),
    " will later read back out. Two rules written from one shape cannot come apart; two written from two shapes eventually do, and that failure is silent, because the lines look declared and are not.");
  ("It refuses a note that has no Children section rather than starting one. A note that has never declared a child is not a hub, and adding the heading would make it look like one on the strength of one command's guess about what the note is for - which is the judgment this is not allowed to make.");
  function memory_hub_children_add_blank(s) {
    let n = text_ends_with(s, "\n");
    return n;
  }
  let heading = "## Children";
  let start = hub_text.indexOf(heading);
  let b = equal_not(start, -1);
  assert_json(b, {
    fault: "the note has no Children section",
    heading,
  });
  let past = add(start, heading.length);
  let after = hub_text.slice(past);
  let next = after.indexOf("\n## ");
  let cut = hub_text.length;
  let ends = equal_not(next, -1);
  if (ends) {
    cut = add(past, next);
  }
  let before = hub_text.slice(0, cut);
  let rest = hub_text.slice(cut);
  let trimmed = text_trim_right(memory_hub_children_add_blank, before);
  let text = list_join_empty([trimmed, "\n\n", lines, "\n", rest]);
  return text;
}
