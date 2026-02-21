import { property_get } from "../../../love/public/src/property_get.mjs";
export function process_env(env_var_name) {
  let value = property_get(process.env, env_var_name);
  return value;
}
