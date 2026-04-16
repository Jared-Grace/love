import { g_distance } from "../../../love/public/src/g_distance.mjs";
export function g_distance_curried(coordinates) {
  return function g_distance_curried_result(item) {
    return g_distance(coordinates, item);
  };
}
