import { list_intersect_multiple } from "../../../love/public/src/list_intersect_multiple.mjs";
export function list_intersect(list, other) {
  let intersection = list_intersect_multiple([list, other]);
  return intersection;
}
