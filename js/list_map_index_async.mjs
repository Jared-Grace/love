import { list_map_async } from "./list_map_async.mjs";
export async function list_map_index_async(list, lambda$item$index) {
  "Map over a list, waiting on each answer, and hand the lambda where in the list each item stood as well as the item itself.";
  "The pair that walks a list one item at a time already had both halves apart - one that counts and one that waits - and every caller wanting both had to give up one of them. Counting outside the lambda by hand is the shape that goes wrong quietly, because a count kept beside a walk that waits is only right while nothing else is walking.";
  "One at a time and in order, because that is what the waiting map underneath already does. So a lambda that carries something from one item to the next still can, and the index it is handed is always the place the item actually stands.";
  let index = 0;
  async function lambda(item) {
    let value = await lambda$item$index(item, index);
    index++;
    return value;
  }
  let mapped = await list_map_async(list, lambda);
  return mapped;
}
