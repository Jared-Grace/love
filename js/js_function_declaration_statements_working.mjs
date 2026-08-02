import { js_function_declaration_statements_doing } from "./js_function_declaration_statements_doing.mjs";
import { js_function_marker_call_not_is } from "./js_function_marker_call_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_function_declaration_statements_working(declaration) {
  "The statements in a function that are the work itself - the prose left out, and the marks left for a reader left out too.";
  "Two questions get asked of a function body and only one of them is this one. What a function DOES leaves the prose behind; what a function is FOR keeps the marks, because a mark is written for the reader rather than for the machine. So the narrowing is written here once instead of at each place that wants the work alone.";
  let doing = js_function_declaration_statements_doing(declaration);
  let working = list_filter(doing, js_function_marker_call_not_is);
  return working;
}
