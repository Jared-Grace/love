import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_hash_key_literals } from "./js_hash_key_literals.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
export async function hash_key_literals_all() {
  "Every place in this repo that writes a word straight into the address of a page. Read-only.";
  "Only files that mention an address at all are opened, and that is not a shortcut: both shapes the reading knows are reached through a function whose own name carries the word, so a file without it cannot hold one.";
  arguments_assert(arguments, 0);
  let repo_name = repo_love_name();
  let candidates = await repo_functions_names_code_includes(repo_name, "hash");
  let sites = [];
  for (let candidate of candidates) {
    let tree = await function_ast(candidate);
    let found = js_hash_key_literals(tree);
    for (let site of found) {
      property_set(site, "f_name", candidate);
      list_add(sites, site);
    }
  }
  return sites;
}
