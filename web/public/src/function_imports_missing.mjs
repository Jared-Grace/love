import { js_imports_missing } from "./js_imports_missing.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { object_merge } from "./object_merge.mjs";
export async function function_imports_missing(f_name) {
  let parsed = await function_parse_declaration(f_name);
  let { ast } = parsed;
  let imports_missing = js_imports_missing(ast);
  let to = object_merge(
    {
      imports_missing,
    },
    parsed,
  );
  return to;
}
