import { g_distance_1 } from "../../../love/public/src/g_distance_1.mjs";
export function g_distance_1_curried(c) {
  let r = function g_distance_1_curried_result(w) {
    let a = g_distance_1(c, w);
    return a;
  };
  return r;
}
