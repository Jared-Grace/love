import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { functions_names } from "./functions_names.mjs";
import { storage_key_seams_all } from "./storage_key_seams_all.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_storage_local_key_f_names } from "./js_storage_local_key_f_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export async function storage_local_key_owner_forwarders() {
  "Every function that stores under an owner it was handed rather than one it names, so the name it publishes is its caller's and not its own. Read-only.";
  "A key is the owning function's name with a word after it. Most storing says whose it is outright; some is written to serve whoever calls it, and takes the owner as a parameter - a shared setting like a font size is stored by one piece of code on behalf of every app that reaches it. Reading that file tells you nothing about which name reached the disk, because the answer is a different name for each caller.";
  "They are known by what is missing. The reading of one file hands back every word standing where the owner goes, without asking whether it is a function; a word there that answers to no function in the repo is a variable, and a variable is exactly the case where the owner came from somewhere else.";
  arguments_assert(arguments, 0);
  let repo_name = repo_love_name();
  let seam = "storage_local_";
  let candidates = await repo_functions_names_code_includes(repo_name, seam);
  let live = await functions_names();
  let seams = await storage_key_seams_all();
  let forwarders = [];
  for (let f_name of candidates) {
    let ast = await function_ast(f_name);
    let names = js_storage_local_key_f_names(ast, seams);
    for (let one of names) {
      let is_live = list_includes(live, one);
      if (is_live) {
        continue;
      }
      list_add(forwarders, f_name);
    }
  }
  let unique = list_unique(forwarders);
  unique.sort();
  return unique;
}
