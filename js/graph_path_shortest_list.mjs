import { graph_neighbors_shuffled } from "./graph_neighbors_shuffled.mjs";
import { graph_search_breadth_first } from "./graph_search_breadth_first.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_linked_to_list } from "./list_linked_to_list.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_reverse } from "./list_reverse.mjs";
export function graph_path_shortest_list(
  start,
  neighbors_get,
  mapper,
  max_depth,
  target,
) {
  let neighbors_shuffled = graph_neighbors_shuffled(neighbors_get);
  let found = graph_search_breadth_first(
    start,
    neighbors_shuffled,
    mapper,
    max_depth,
    target,
  );
  let is_found = property_get(found, "found");
  if (not(is_found)) {
    return [];
  }
  let linked = list_linked_to_list(found, "previous", max_depth);
  let nodes = list_map_property(linked, "node");
  list_reverse(nodes);
  return nodes;
}
