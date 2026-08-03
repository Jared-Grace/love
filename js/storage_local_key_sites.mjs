import { repo_functions_names_code_includes_multiple } from "./repo_functions_names_code_includes_multiple.mjs";
import { js_storage_local_key_words } from "./js_storage_local_key_words.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { storage_key_seams_all } from "./storage_key_seams_all.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_storage_local_key_f_names } from "./js_storage_local_key_f_names.mjs";
import { list_add } from "./list_add.mjs";
export async function storage_local_key_sites() {
  "Every place in the repo that writes a browser storage key, as {f_name, names, words} - the function doing the writing, the words standing where the owner goes, and the words written out after it. Read-only.";
  "Only the files that mention one of the seams are opened, so the walk costs a handful of trees rather than the whole repo.";
  "Which seams is asked rather than spelled as one word. It was the word the storing functions all start with, from before there were front doors, and a door is named for what it does rather than for where it keeps things - so the file calling one of them says nothing about storage, was never opened, and the word it writes into a key was read by nobody. That is how the word every reader of a chapter is filed under stayed unwatched.";
  "A name here is not yet known to be a function name. Which of the two it is settles the question each caller is really asking: a word that answers to a live function is an owner named outright, and a word that answers to nothing is a parameter, so the owner came from the caller. Both readings need the same walk, which is why the walk lives here and neither of them owns it.";
  "The two halves of a key come back from one walk for the same reason. A key is an owner and a word joined, both are on somebody's disk, and either one changing loses the same setting - so asking about them separately would parse every one of these trees twice to answer one question about one line.";
  arguments_assert(arguments, 0);
  let repo_name = repo_love_name();
  let seams = await storage_key_seams_all();
  let candidates = await repo_functions_names_code_includes_multiple(
    repo_name,
    seams,
  );
  let sites = [];
  for (let f_name of candidates) {
    let ast = await function_ast(f_name);
    let names = js_storage_local_key_f_names(ast, seams);
    let words = js_storage_local_key_words(ast, seams);
    let site = {
      f_name,
      names,
      words,
    };
    list_add(sites, site);
  }
  return sites;
}
