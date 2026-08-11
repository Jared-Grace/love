import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function g_plant_chapters_lines_of(counted) {
  arguments_assert(arguments, 1);
  let lines = property_get(counted, "lines");
  return lines;
}
