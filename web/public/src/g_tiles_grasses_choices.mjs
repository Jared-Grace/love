import { list_take } from "../../../love/public/src/list_take.mjs";
import { g_tiles_grasses_shuffled } from "../../../love/public/src/g_tiles_grasses_shuffled.mjs";
export function g_tiles_grasses_choices() {
  let grasses = g_tiles_grasses_shuffled();
  ("choose three different types of grass for visual variety");
  let taken = list_take(grasses, 3);
  return taken;
}
