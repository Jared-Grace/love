import { list_map_property } from "./list_map_property.mjs";
import { g_genders_get } from "./g_genders_get.mjs";
export function g_genders_names() {
  let genders = g_genders_get();
  let mapped = list_map_property(genders, "name");
  return genders;
}
