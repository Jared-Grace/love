import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { function_dependencies } from "./function_dependencies.mjs";
import { list_map } from "./list_map.mjs";
export async function function_dependencies_code(f_name) {
  let ds = await function_dependencies(f_name);
  let mapped = list_map(ds, function_parse_declaration);
  let waited = list_wait(mapped);
}
