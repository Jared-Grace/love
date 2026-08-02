import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
export async function key_literals_all_generic(names, read) {
  "Given the files worth opening and a reading that says which words one file writes straight into an address, every such place across all of them, each carrying the name of the file it was found in.";
  "Which files to open and which reading to use are both received, because the part after the hash and the part after the question mark differ in exactly those two things and in nothing else.";
  arguments_assert(arguments, 2);
  let sites = [];
  for (let candidate of names) {
    let tree = await function_ast(candidate);
    let found = read(tree);
    for (let site of found) {
      property_set(site, "f_name", candidate);
      list_add(sites, site);
    }
  }
  return sites;
}
