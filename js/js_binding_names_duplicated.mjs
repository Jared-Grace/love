import { js_binding_names } from "./js_binding_names.mjs";
import { list_duplicates } from "./list_duplicates.mjs";
import { list_unique } from "./list_unique.mjs";
export function js_binding_names_duplicated(ast) {
  "the names this module binds more than once, each reported once. The second binding shadows the first, so a block pasted in from elsewhere can silently rebind a name that later lines still read — the reader sees one name and cannot tell which value it holds.";
  let names = js_binding_names(ast);
  let repeats = list_duplicates(names);
  let duplicated = list_unique(repeats);
  return duplicated;
}
