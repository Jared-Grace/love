import { list_index_of } from "./list_index_of.mjs";
export function g_z(z) {
  let index = list_index_of(
    [
      "tile",
      "ground_tint",
      "character",
      "icon",
      "tutorial",
      "click",
      "tint",
      "overlay",
      "raised",
    ],
    z,
  );
  return index;
}
