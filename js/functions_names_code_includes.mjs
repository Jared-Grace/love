import { functions_code } from "./functions_code.mjs";
import { function_entries_names_code_includes } from "./function_entries_names_code_includes.mjs";
export async function functions_names_code_includes(text) {
  "The functions whose source contains a given piece of text - the question every one of those hand-written folder walks was really asking.";
  "It hands back a list of names, not a string with the names joined by commas. Joining is the caller's business, and doing it here is how the same mistake kept happening: a joined list ends in a separator, the empty piece after it reads as a name, and a sweep of sixty functions is thrown away over a name that was never there. Three sweeps were lost that way in one afternoon.";
  "Every repo, so the answer includes names no transform in this repo can resolve to a file. That is right for asking a question and wrong for driving a rewrite; the single-repo twin is the one a sweep should call.";
  let entries = await functions_code();
  let names = function_entries_names_code_includes(entries, text);
  return names;
}
