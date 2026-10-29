import { arguments_assert } from "./arguments_assert.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_without } from "./list_without.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { function_read } from "./function_read.mjs";
import { list_add } from "./list_add.mjs";
import { sha256_hash } from "./sha256_hash.mjs";
import { json_to } from "./json_to.mjs";
export async function permission_auto_checker_fingerprint() {
  "One short word standing for the source of everything that decides whether Claude may grant itself a function - the self-grant command and every function it reaches.";
  "★ EVERY REACHED FUNCTION COUNTS, NOT ONLY THE ONES NAMED LIKE A CHECK. The verdict depends on all of them: a list helper that lied would let a refusal fall out of the list as surely as an edit to the check itself. So any change anywhere the verdict could come from makes the fingerprint differ, and the self-grant stops until a person looks again.";
  "The granted-names list is left out. It is generated, the self-grant itself rewrites it, and counting it would mean every grant spoiled the pin for the next.";
  arguments_assert(arguments, 0);
  let reached = await function_reachable_names(
    fn_name("permission_grant_add_auto"),
  );
  let names = list_without(reached, fn_name("permission_grant_names"));
  list_sort_text(names);
  let sources = [];
  for (let f_name of names) {
    let source = await function_read(f_name);
    list_add(sources, [f_name, source]);
  }
  let value = json_to(sources);
  let fingerprint = sha256_hash(value);
  return fingerprint;
}
