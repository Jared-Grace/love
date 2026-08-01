import { storage_key_seams_durable } from "./storage_key_seams_durable.mjs";
import { js_storage_key_word_forwarded_is } from "./js_storage_key_word_forwarded_is.mjs";
import { list_concat } from "./list_concat.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_storage_local_key_f_names } from "./js_storage_local_key_f_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export async function storage_local_key_names_found() {
  "Every function whose name the repo writes into a browser storage key today, read off the source rather than off any record. Read-only.";
  "Only the files that mention the storing at all are opened. The question could be asked of every function in the repo and would answer the same, at the cost of parsing two thousand trees to find eight names.";
  "The files are read twice, and the first reading is what makes the second one see anything. A front door that takes a key word and hands it on writes no name of its own, so reading only the storing itself stops at the door; the first pass names those doors, and the second reads the calls to them as well, where the word is actually written. One step out reaches the front doors the repo has today, and a door behind a door would need another - which is a thing to build when one exists, not before.";
  "A word standing where the owner goes that answers to no function is dropped here, and this is the only place that can be known - inside one file a parameter and a function look identical. What is dropped is exactly the hole this cannot reach: a helper handed the owner by its own caller publishes that caller's name, and which caller it was is not written anywhere the reading can follow.";
  arguments_assert(arguments, 0);
  let repo_name = repo_love_name();
  let seam = "storage_local_";
  let candidates = await repo_functions_names_code_includes(repo_name, seam);
  let live = await functions_names();
  let durable = storage_key_seams_durable();
  let forwarders = [];
  for (let candidate of candidates) {
    let tree = await function_ast(candidate);
    let forwards = js_storage_key_word_forwarded_is(tree, durable);
    if (forwards) {
      list_add(forwarders, candidate);
    }
  }
  let seams = list_concat(durable, forwarders);
  let found = [];
  for (let f_name of candidates) {
    let ast = await function_ast(f_name);
    let names = js_storage_local_key_f_names(ast, seams);
    for (let one of names) {
      let is_live = list_includes(live, one);
      if (is_live) {
        list_add(found, one);
      }
    }
  }
  let unique = list_unique(found);
  unique.sort();
  return unique;
}
