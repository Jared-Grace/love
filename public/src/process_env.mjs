import { property_get } from "../../../love/public/src/property_get.mjs";
export function process_env() {
  let value = property_get(process.env, property_name);
  return value;
}
