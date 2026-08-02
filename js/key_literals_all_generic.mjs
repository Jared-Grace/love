import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
export async function key_literals_all_generic(names, read) {
  "Given the files worth opening and a reading that says which words one file writes straight into an address, every such place across all of them, as {files, sites} - how many files were opened, and what was found in them, each carrying the name of the file it was found in.";
  "Which files to open and which reading to use are both received, because the part after the hash and the part after the question mark differ in exactly those two things and in nothing else.";
  "How many files were opened comes back with what was found, because what was found here is meant to be nothing and a walk handed no files at all also finds nothing. The two are the same answer and opposite news. The companion reading, which asks which functions hold these words, needs no such number: what it hands back is the whole set rather than the faults in it, so a broken walk shows up as an empty answer on its own.";
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
