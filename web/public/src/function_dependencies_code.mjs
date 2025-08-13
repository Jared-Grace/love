import { log } from "./log.mjs";
import { list_wait } from "./list_wait.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { function_dependencies } from "./function_dependencies.mjs";
import { list_map } from "./list_map.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_join } from "./list_join.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function function_dependencies_code(f_name) {
  let ds = await function_dependencies(f_name);
  let mapped = list_map(ds, function_parse_declaration);
  let waited = await list_wait(mapped);
  let mapped2 = list_map_property(waited, "declaration");
  let mapped3 = list_map(mapped2, js_unparse);
  let waited2 = list_wait(mapped3);
  return list_join(mapped3, "\n");
}
