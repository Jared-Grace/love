import { arguments_assert } from "./arguments_assert.mjs";
import { js_imports_relative_named } from "./js_imports_relative_named.mjs";
import { property_get } from "./property_get.mjs";
import { path_join } from "./path_join.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function js_imports_unexported(ast, dir, given) {
  "The names this file's import lines ask a neighbour for that the neighbour does not give out";
  "A file the record has nothing for is passed over. That is either a file which is not there - already watched by the dangling gate next door, and saying it twice would put one broken line in two reports - or one that would not parse, which is no evidence about what it gives out.";
  "This is the third of the three ways an import line can be wrong, and the last one nothing was asking. The first is a name read and never imported; the second is an import naming a file that is not there; this is an import naming a file that is there and asking it for something it never wrote. All three stop the code, and only the first one waits until a line runs to do it.";
  arguments_assert(arguments, 3);
  let asked = js_imports_relative_named(ast);
  let unexported = [];
  for (let one of asked) {
    let path = property_get(one, "path");
    let name = property_get(one, "name");
    let settled = path_join([dir, path]);
    let names = property_get_or_null(given, settled);
    if (not(names)) {
      continue;
    }
    let there = list_includes(names, name);
    if (not(there)) {
      list_add(unexported, one);
    }
  }
  return unexported;
}
