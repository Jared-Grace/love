import { g_distance_1 } from "../../../love/public/src/g_distance_1.mjs";
export function g_distance_1_curried(left) {
  let r = function g_distance_1_curried_result(right) {
    let zi = g_distance_1(left, right);
    return zi;
  };
  return r;
}
