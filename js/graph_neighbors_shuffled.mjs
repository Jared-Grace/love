import { list_shuffle } from "./list_shuffle.mjs";
export function graph_neighbors_shuffled(neighbors_get) {
  function neighbors_get_shuffled(node) {
    let neighbors = neighbors_get(node);
    list_shuffle(neighbors);
    return neighbors;
  }
  return neighbors_get_shuffled;
}
