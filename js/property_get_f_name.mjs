import { property_get } from "./property_get.mjs";
export function property_get_f_name(item) {
  "The function name a record carries, for handing to a mapping without writing a lambda for it";
  let f_name = property_get(item, "f_name");
  return f_name;
}
