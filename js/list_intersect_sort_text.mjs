import { list_intersect } from "./list_intersect.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function list_intersect_sort_text(prefixed, identifier_names) {
  let apps = list_intersect(prefixed, identifier_names);
  list_sort_text(apps);
  return apps;
}
