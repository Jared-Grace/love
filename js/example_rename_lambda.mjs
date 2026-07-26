import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { js_imports_dedupe } from "./js_imports_dedupe.mjs";
import { js_imports_source_rename } from "./js_imports_source_rename.mjs";
import { js_fn_name_strings_rename } from "./js_fn_name_strings_rename.mjs";
import { examples_import_source } from "./examples_import_source.mjs";
export function example_rename_lambda(f_name_before, f_name_after) {
  "What a rename does to one file of the example corpus: move the name at every site that reads it, repoint the one way in whose file just moved, and move a name written as a marked string. Nothing else in the file is touched, and that is the whole point - a name spelled as a plain string there is either a fixture the example owns or a name the command being shown brings into being, and neither of those follows a rename of the real one. Only a marked string is a reference, so only a marked string moves.";
  function lambda(ast) {
    js_identifier_rename(ast, f_name_before, f_name_after);
    js_imports_dedupe(ast);
    let source_before = examples_import_source(f_name_before);
    let source_after = examples_import_source(f_name_after);
    js_imports_source_rename(ast, source_before, source_after);
    js_fn_name_strings_rename(ast, f_name_before, f_name_after);
  }
  return lambda;
}
