import { list_intersect_multiple } from "./list_intersect_multiple.mjs";
export function list_intersect(list, other) {
  let intersection = list_intersect_multiple([list, other]);
  return intersection;
}
