import { properties_get } from "./properties_get.mjs";
import { list_includes } from "./list_includes.mjs";
export function process_env_exists(env_var_name) {
  "Asks whether the environment carries a name at all, without reading it. The";
  "plain getter treats a missing name as a mistake and throws, which is right when";
  "the caller depends on the value and wrong when the caller is only asking.";
  let names = properties_get(process.env);
  let exists = list_includes(names, env_var_name);
  return exists;
}
