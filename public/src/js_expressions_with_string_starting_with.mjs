import { js_strings_generic } from "../../../love/public/src/js_strings_generic.mjs";
import { list_filter_property_starts_with } from "../../../love/public/src/list_filter_property_starts_with.mjs";
export function js_expressions_with_string_starting_with(ast, prefix) {
  let strings = js_strings_generic(ast);
  let filtered = list_filter_property_starts_with(strings, "value", prefix);
  return filtered;
}
