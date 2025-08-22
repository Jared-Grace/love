import { marker } from "./marker.mjs";
import { object_merge } from "./object_merge.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { function_parse } from "./function_parse.mjs";
export async function function_parse_strict_declaration(f_name) {
  marker("1");
  let parsed = await function_parse(f_name);
  let { ast } = parsed;
  let declaration = js_declaration_single(ast);
  let to = object_merge(
    {
      declaration,
    },
    parsed,
  );
  return to;
}
