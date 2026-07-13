import { list_intersect } from "./list_intersect.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function list_intersect_sort_text(list, other) {
  let apps = list_intersect(list, other);
  list_sort_text(apps);
  return apps;
}
