import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { js_imports_dedupe } from "./js_imports_dedupe.mjs";
import { js_imports_source_rename } from "./js_imports_source_rename.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
("The pure, hermetic heart of a rename: given a flat directory where each fn lives");
("in its own ./<name>.mjs file, this per-file lambda renames the identifier at every");
("site, dedupes imports, and repoints the one import whose file just moved — with NO");
("global dictionary, so it runs the same in a temp sandbox as in the repo. The dir");
("runner maps it over every file, then moves before.mjs to after.mjs.");
export function js_identifiers_rename_dir_lambda(name_before, name_after) {
  function lambda(ast) {
    js_identifier_rename(ast, name_before, name_after);
    js_imports_dedupe(ast);
    let source_before = text_combine_multiple(["./", name_before, ".mjs"]);
    let source_after = text_combine_multiple(["./", name_after, ".mjs"]);
    js_imports_source_rename(ast, source_before, source_after);
  }
  return lambda;
}
