import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_each_async } from "./text_split_comma_each_async.mjs";
import { function_delete_if_exists } from "./function_delete_if_exists.mjs";
export async function function_delete_if_exists_multiple_args(f_names) {
  arguments_assert(arguments, 1);
  ("delete several functions named as one comma-joined word, skipping any that is already gone");
  ("its twin without the suffix takes a real list, which no command line can hand it: every word arrives as a separate parameter, so a one-parameter function keeps the first name and drops the rest. That made a committed function unreachable from every seam - callable in principle and by nothing in practice.");
  ("skipping the missing ones is what lets the same command be run twice. A deletion that has already happened is the answer the caller wanted, not a failure, and a command that refuses the second time cannot be the record of what was done.");
  await text_split_comma_each_async(f_names, function_delete_if_exists);
}
