import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
import { js_identifier_name_number_suffix_base } from "../../../love/public/src/js_identifier_name_number_suffix_base.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_identifier_rename } from "../../../love/public/src/js_identifier_rename.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function js_identifiers_rename_unused_number_suffixes(ast) {
  let names = js_identifiers_names(ast);
  function lambda(name) {
    let base = js_identifier_name_number_suffix_base(name);
    if (base === null) {
      return;
    }
    let exists = list_includes(names, base);
    if (exists) {
      return;
    }
    js_identifier_rename(ast, name, base);
    list_add(names, base);
  }
  each(names, lambda);
}
