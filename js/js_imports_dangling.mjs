import { arguments_assert } from "./arguments_assert.mjs";
import { js_imports_relative_paths } from "./js_imports_relative_paths.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function js_imports_dangling(ast, dir) {
  "The dotted paths an import line names that no file answers to, looked for from the folder the importing file sits in";
  "This is the other half of the import question, and the half nothing was asking. Its sibling asks which names a body reads without importing them - a name that is imported is never missing there, however the import line reads. So an import naming a file that was deleted passed every check the repo had.";
  "It is the worse half of the two. A name read but not imported is one line failing when that line runs; a file that is not there stops the whole module loading, and with it every module importing that one, before any of it has had a chance to run.";
  arguments_assert(arguments, 2);
  let named = js_imports_relative_paths(ast);
  let dangling = [];
  for (let one of named) {
    let full = path_join([dir, one]);
    let there = await file_exists(full);
    if (not(there)) {
      list_add(dangling, one);
    }
  }
  return dangling;
}
