import { arguments_assert } from "./arguments_assert.mjs";
import { js_imports_declarations_externals } from "./js_imports_declarations_externals.mjs";
import { property_get } from "./property_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_map } from "./list_map.mjs";
export function js_imports_package_lines(ast) {
  arguments_assert(arguments, 1);
  ("Every line a file uses to bring in something that is not a file in this repo, written back out as the text of that line.");
  ("THE LINES ARE ASKED FOR AS TEXT BECAUSE THE TREE IS WHAT LOSES THEM. Everything the repo builds an import out of is worked back from a name the repo answers to, so a name it has never heard of has nothing to be worked back from, and a step that rebuilds a file from its tree writes every import except these. Handing the line over whole is the only shape that survives a rebuild, because it asks nothing to be derived.");
  ("Every spelling is carried rather than the one that is common here - a default under its own name, a set of names in braces, and a bare bring-in kept for what it does rather than for what it gives. Rebuilding the line from a name and a source would have quietly dropped the other two, which is the same defect one layer up.");
  let externals = js_imports_declarations_externals(ast);
  function line_of(external) {
    let declaration = property_get(external, "declaration");
    let code = js_unparse(declaration);
    let line = text_trim(code);
    return line;
  }
  let lines = list_map(externals, line_of);
  return lines;
}
