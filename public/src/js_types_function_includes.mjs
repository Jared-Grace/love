import { list_includes } from "./list_includes.mjs";
import { js_types_function } from "./js_types_function.mjs";
export function js_types_function_includes(item) {
  let f_types = js_types_function();
  let includes = list_includes(f_types, item);
  return includes;
}
