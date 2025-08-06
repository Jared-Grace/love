import { file_js_parse } from "./file_js_parse.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { visit } from "./visit.mjs";
import { object_properties } from "./object_properties.mjs";
import { list_is } from "./list_is.mjs";
import { string_is } from "./string_is.mjs";
export async function function_imports_missing_add(f_name) {
  const f_path = function_name_to_path(f_name);
  let parsed = await file_js_parse(f_path);
  let on_each = console.log;
  visit(
    parsed,
    (n) => {
      if (list_is(n)) {
        return n;
      }
      if (string_is(n)) {
        return [];
      }
      return object_properties(n);
    },
    on_each,
  );
}
