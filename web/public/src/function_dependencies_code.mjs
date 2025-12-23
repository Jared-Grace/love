import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { list_wait } from "../../../love/public/src/list_wait.mjs";
import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
import { function_dependencies } from "../../../love/public/src/function_dependencies.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export async function function_dependencies_code(f_name) {
  let ds = await function_dependencies(f_name);
  let mapped = list_map(ds, function_parse_declaration);
  let waited = await list_wait(mapped);
  let mapped2 = list_map_property(waited, "declaration");
  let externals = list_map_property(waited, "externals");
  let waited2 = await list_map_unordered_async(mapped2, js_unparse);
  let code = list_join_newline(waited2);
  let v = {
    code,
    externals,
  };
  return v;
}
