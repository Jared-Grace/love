import { list_index_of } from "./list_index_of.mjs";
export function g_z(z) {
  let index = list_index_of(
    ["tile", "character", "icon", "tutorial", "click", "overlay", "raised"],
    z,
  );
  return index;
}
