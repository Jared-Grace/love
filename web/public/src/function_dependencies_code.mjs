import { log } from "./log.mjs";
import { list_wait } from "./list_wait.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { function_dependencies } from "./function_dependencies.mjs";
import { list_map } from "./list_map.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_join } from "./list_join.mjs";
export async function function_dependencies_code(f_name) {
  let ds = await function_dependencies(f_name);
  let mapped = list_map(ds, function_parse_declaration);
  let waited = await list_wait(mapped);
  log(waited);
  let mapped2 = list_map(waited, js_unparse);
  return list_join(mapped2, "\n");
}
