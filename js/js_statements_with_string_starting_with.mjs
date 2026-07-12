import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { js_strings } from "./js_strings.mjs";
export function js_statements_with_string_starting_with(ast, prefix) {
  let strings = js_strings(ast);
  let filtered = list_filter_starts_with(strings, prefix);
  return filtered;
}
