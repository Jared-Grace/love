import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
export function color_near_miss_threshold() {
  function_duplicate_kind_parallel();
  ("how close two colours may sit before they read as the same colour spelled twice: the largest single channel difference, out of 255, that still counts as a near miss. Sixteen is about where a side-by-side pair stops being tellable apart on an ordinary screen, so anything under it is either one decision written twice or a distinction nobody can see.");
  let n = 16;
  return n;
}
