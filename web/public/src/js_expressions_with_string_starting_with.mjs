import { list_filter_property_starts_with } from "../../../love/public/src/list_filter_property_starts_with.mjs";
import { js_strings_nodes } from "../../../love/public/src/js_strings_nodes.mjs";
export function js_expressions_with_string_starting_with(ast, prefix) {
  let strings = js_strings_nodes(ast);
  let filtered = list_filter_property_starts_with(strings, prefix);
  return filtered;
}
