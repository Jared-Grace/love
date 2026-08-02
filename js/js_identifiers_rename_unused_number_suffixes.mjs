import { equal } from "./equal.mjs";
import { lists_any_include } from "./lists_any_include.mjs";
import { js_identifiers_invalid } from "./js_identifiers_invalid.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { js_identifiers_function_names } from "./js_identifiers_function_names.mjs";
import { js_identifier_name_number_suffix_base } from "./js_identifier_name_number_suffix_base.mjs";
import { list_add } from "./list_add.mjs";
import { js_identifier_rename_referenced } from "./js_identifier_rename_referenced.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { each } from "./each.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_identifiers_rename_unused_number_suffixes(ast) {
  "A name the file made up to stand beside another - `divided2` next to `divided` - loses its number once the plain name is free.";
  "Only a name the file reads as a value is its own to change. A word in the place of a property belongs to whatever object is being asked and is spelled the way that object spells it, so the two are gathered apart: every name at all is what a plain name has to be free of, and only the names read as values are offered up for renaming.";
  let invalid = js_identifiers_invalid();
  let existing = js_identifiers_names(ast);
  let referenced = js_identifiers_referenced_names(ast);
  let function_names = js_identifiers_function_names(ast);
  function lambda(name) {
    let is_function_name = list_includes(function_names, name);
    if (is_function_name) {
      return;
    }
    let base = js_identifier_name_number_suffix_base(name);
    if (equal(base, null)) {
      return;
    }
    let lists = [existing, invalid];
    let any = lists_any_include(lists, base);
    if (any) {
      return;
    }
    js_identifier_rename_referenced(ast, name, base);
    list_add(existing, base);
  }
  each(referenced, lambda);
}
