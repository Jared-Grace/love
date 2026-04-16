import { g_distance } from "../../../love/public/src/g_distance.mjs";
export function g_distance_curried(coordinates) {
  let r = function g_distance_curried_result(item) {
    let distance = g_distance(coordinates, item);
    return distance;
  };
  return r;
}
