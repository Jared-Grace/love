import { list_add } from "./list_add.mjs";
export function list_group_sequential_under(sizes, ceiling) {
  "partition an ordered list of item sizes into contiguous groups, each summing at most the ceiling; an item bigger than the ceiling forms its own group; returns the groups, each an array of the original sizes";
  let groups = [];
  let current = [];
  let running = 0;
  for (let size of sizes) {
    let next = running + size;
    let fits = next <= ceiling;
    let started = current.length > 0;
    let overflow = started && !fits;
    if (overflow) {
      list_add(groups, current);
      current = [];
      running = 0;
    }
    list_add(current, size);
    running = running + size;
  }
  let tail = current.length > 0;
  if (tail) {
    list_add(groups, current);
  }
  return groups;
}
