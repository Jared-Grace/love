import { arguments_assert } from "./arguments_assert.mjs";
import { storage_key_seams_durable } from "./storage_key_seams_durable.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_storage_key_word_forwarded_is } from "./js_storage_key_word_forwarded_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_concat } from "./list_concat.mjs";
export async function storage_key_seams_all() {
  "Every call a key word can be written at - the ones that store it, and the front doors that take a word and hand it straight on. Read-only.";
  "A front door writes no word of its own, so a reading that stops at the storing never sees the name. Reading the calls to the door as well is what reaches it, and which functions are doors is a question about the code rather than a list somebody keeps: a door is one that hands the storing a word held in a variable, because a variable is exactly what cannot be read here and can be read at whoever filled it.";
  "One step out. A door standing behind another door would need the walk to go round again, and there is none today - so this is the answer for the repo as it stands, and the day one appears is the day to widen it.";
  arguments_assert(arguments, 0);
  let durable = storage_key_seams_durable();
  let repo_name = repo_love_name();
  let seam = "storage_local_";
  let candidates = await repo_functions_names_code_includes(repo_name, seam);
  let doors = [];
  for (let candidate of candidates) {
    let tree = await function_ast(candidate);
    let forwards = js_storage_key_word_forwarded_is(tree, durable);
    if (forwards) {
      list_add(doors, candidate);
    }
  }
  let seams = list_concat(durable, doors);
  return seams;
}
