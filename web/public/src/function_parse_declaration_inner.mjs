import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
import { js_flo } from "../../../love/public/src/js_flo.mjs";
export function function_parse_declaration_inner(parsed) {
  let { ast } = parsed;
  let declaration = js_flo(ast);
  let to = object_merge_set(
    {
      declaration,
    },
    parsed,
  );
  return to;
}
