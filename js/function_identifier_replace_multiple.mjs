import { text_split_comma } from "./text_split_comma.mjs";
import { lists_sizes_equal_assert_json } from "./lists_sizes_equal_assert_json.mjs";
import { list_size } from "./list_size.mjs";
import { function_identifier_replace } from "./function_identifier_replace.mjs";
import { list_add } from "./list_add.mjs";
import { less_than } from "./less_than.mjs";
export async function function_identifier_replace_multiple(
  f_name,
  names_before_comma,
  names_after_comma,
) {
  "Renames several names inside one function, in one command - the words being replaced in one list, what each becomes in the other, read off in step.";
  "The single form is the right shape for one rename and the wrong shape for the ordinary case, which is a function just copied from a neighbour and needing every local it brought along renamed at once. Seven of those is seven commands and seven process starts, and the log reads that as a habit rather than as work.";
  "One at a time and in order, never all at once, because every one of them rewrites the same file: run together they would each parse what was on disk before the others wrote, and the last to finish would be the only rename that survived.";
  "The two lists must be the same length, because a word with nothing to become is a typo rather than a request, and a silent skip would hide it.";
  let names_before = text_split_comma(names_before_comma);
  let names_after = text_split_comma(names_after_comma);
  lists_sizes_equal_assert_json([names_before, names_after], {
    hint: "each name being replaced needs the name it becomes, so give the two lists the same number of words",
  });
  let size = list_size(names_before);
  let replaced = [];
  for (let index = 0; less_than(index, size); index++) {
    let name_before = names_before[index];
    let name_after = names_after[index];
    await function_identifier_replace(f_name, name_before, name_after);
    list_add(replaced, name_after);
  }
  let r = {
    f_name,
    replaced,
  };
  return r;
}
