import { lists_any_include } from "./lists_any_include.mjs";
import { js_identifiers_invalid } from "./js_identifiers_invalid.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { js_identifiers_function_names } from "./js_identifiers_function_names.mjs";
import { js_identifier_name_number_suffix_base } from "./js_identifier_name_number_suffix_base.mjs";
import { list_add } from "./list_add.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { each } from "./each.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_identifiers_rename_unused_number_suffixes(ast) {
  let invalid = js_identifiers_invalid();
  let existing = js_identifiers_names(ast);
  let function_names = js_identifiers_function_names(ast);
  function lambda(name) {
    let is_function_name = list_includes(function_names, name);
    if (is_function_name) {
      return;
    }
    let base = js_identifier_name_number_suffix_base(name);
    if (base === null) {
      return;
    }
    let lists = [existing, invalid];
    let any = lists_any_include(lists, base);
    if (any) {
      return;
    }
    js_identifier_rename(ast, name, base);
    list_add(existing, base);
  }
  each(existing, lambda);
}
