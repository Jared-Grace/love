import { list_size } from "./list_size.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { indexeddb_name_doors } from "./indexeddb_name_doors.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { js_indexeddb_name_literals } from "./js_indexeddb_name_literals.mjs";
import { key_literals_all_generic } from "./key_literals_all_generic.mjs";
export async function indexeddb_name_literals_all() {
  "Every place in this repo that writes the name of a browser database or one of its stores straight into a call, as {files, sites} - how many files were opened, and what was found in them. Read-only.";
  "The ways in are read off the functions themselves once, before any file is opened, so this cannot fall behind a new way in the way a written-down list would.";
  "Only files that say the browser database's own word anywhere are opened, because reading a tree costs a great deal more than looking for a word in text and every file that names a store has to spell one of these to reach it.";
  "How many files were opened is handed back with the answer rather than dropped, because the answer here is almost always nothing found and nothing found is what a walk that opened no files at all also says. The two are the same sentence and opposite news, and the count is what tells them apart. The shared walk counts them, so nothing is counted here twice.";
  arguments_assert(arguments, 0);
  let doors = await indexeddb_name_doors();
  let repo_name = repo_love_name();
  let word = "indexeddb_";
  let candidates = await repo_functions_names_code_includes(repo_name, word);
  function read(tree) {
    let found = js_indexeddb_name_literals(tree, doors);
    return found;
  }
  let sites = await key_literals_all_generic(candidates, read);
  let files = list_size(candidates);
  let r = {
    files,
    sites,
  };
  return r;
}
