import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { storage_key_seams_all } from "./storage_key_seams_all.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_storage_local_key_f_names } from "./js_storage_local_key_f_names.mjs";
import { list_add } from "./list_add.mjs";
export async function storage_local_key_sites() {
  "Every place in the repo that writes a browser storage key, as {f_name, names} - the function doing the writing, and the words standing where the owner goes. Read-only.";
  "Only the files that mention the storing at all are opened, so the walk costs a handful of trees rather than the whole repo.";
  "A word here is not yet known to be a function name. Which of the two it is settles the question each caller is really asking: a word that answers to a live function is an owner named outright, and a word that answers to nothing is a parameter, so the owner came from the caller. Both readings need the same walk, which is why the walk lives here and neither of them owns it.";
  arguments_assert(arguments, 0);
  let repo_name = repo_love_name();
  let seam = "storage_local_";
  let candidates = await repo_functions_names_code_includes(repo_name, seam);
  let seams = await storage_key_seams_all();
  let sites = [];
  for (let f_name of candidates) {
    let ast = await function_ast(f_name);
    let names = js_storage_local_key_f_names(ast, seams);
    let site = {
      f_name,
      names,
    };
    list_add(sites, site);
  }
  return sites;
}
