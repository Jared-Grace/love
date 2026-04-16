import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_object_includes(clicked_coordinates, npcs) {
  let lambda17 = object_includes_curried_right(clicked_coordinates);
  let npcs_matched = list_filter(npcs, lambda17);
  return npcs_matched;
}
