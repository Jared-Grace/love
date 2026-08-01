import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { literals_frozen_names } from "./literals_frozen_names.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_hash_key_getters } from "./js_hash_key_getters.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
export async function hash_key_getters_unfrozen() {
  "Every function that hands back the name of a field of a page address and that nothing has frozen - each answer naming the file that calls it and the function it calls. Read-only.";
  "A word in an address leaves the moment somebody saves the link or sends it on. Holding it in a function is only half of what keeps it safe: the word can still be reworded there, and then every saved link spelling the old one opens on nothing, with no repair possible because the link is on a disk nobody here can reach.";
  "Freezing is the other half, and nothing about the call site says whether it was done. So a word can be moved out of the sites, the gate watching for written-out words goes green, and the word is published unwatched all the same - which is exactly what happened twice in one sitting, caught both times only by somebody remembering.";
  "The pair is the answer rather than the name alone, so a failure says where to look rather than only what is missing.";
  "Only the files that mention an address at all are opened, so the walk costs a handful of trees rather than the whole repo.";
  arguments_assert(arguments, 0);
  let repo_name = repo_love_name();
  let candidates = await repo_functions_names_code_includes(repo_name, "hash");
  let frozen = literals_frozen_names();
  let offenders = [];
  for (let candidate of candidates) {
    let ast = await function_ast(candidate);
    let names = js_hash_key_getters(ast);
    for (let f_name of names) {
      let kept = list_includes(frozen, f_name);
      if (kept) {
        continue;
      }
      let pair = text_combine_multiple([candidate, " -> ", f_name]);
      list_add_unique(offenders, pair);
    }
  }
  offenders.sort();
  return offenders;
}
