import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { g_tiles_grasses } from "../../../love/public/src/g_tiles_grasses.mjs";
export function g_tiles_grasses_shuffled() {
  let grasses = g_tiles_grasses();
  list_shuffle(grasses);
  return grasses;
}
