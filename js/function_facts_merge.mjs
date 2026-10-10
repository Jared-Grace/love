import { arguments_assert } from "./arguments_assert.mjs";
import { function_facts_merge_with } from "./function_facts_merge_with.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
export function function_facts_merge(facts, data) {
  arguments_assert(arguments, 2);
  ("Fold what one file says into the index everything is looked up in.");
  ("The cheap half. It touches lists and records and never opens a file, so it");
  ("runs the same whether the facts were read off the disk a moment ago or kept");
  ("from the last time the file was seen unchanged.");
  ("One file on its own scans each list it adds to, because remembering what a list holds only pays when the same list is asked about again in the same run.");
  function_facts_merge_with(facts, data, list_add_if_not_includes);
}
