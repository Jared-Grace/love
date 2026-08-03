import { list_map_property } from "./list_map_property.mjs";
import { g_genders_names } from "./g_genders_names.mjs";
export function g_sexes() {
  let genders = g_genders_names();
  let mapped = list_map_property(genders, "name");
  return genders;
}
