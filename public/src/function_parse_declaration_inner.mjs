import { object_merge } from "./object_merge.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
export function function_parse_declaration_inner(parsed) {
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
