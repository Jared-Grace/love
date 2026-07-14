import { list_pop_first } from "./list_pop_first.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { equal } from "./equal.mjs";
import { set_add } from "./set_add.mjs";
import { set_includes } from "./set_includes.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
export function graph_search_breadth_first(
  start,
  neighbors_get,
  mapper,
  max_depth,
  target,
) {
  let mt = mapper(target);
  let visited = new Set();
  let queue = [];
  queue.push({
    node: start,
    data: null,
    previous: null,
    depth: 0,
  });
  while (queue.length > 0) {
    let q_current = list_pop_first(queue);
    let depth = property_get(q_current, "depth");
    let node = property_get(q_current, "node");
    let json = mapper(node);
    let i = set_includes(visited, json);
    if (i) {
      continue;
    }
    let m = mapper(node);
    set_add(visited, m);
    if (equal(m, mt)) {
      object_merge_set(q_current, {
        found: true,
      });
      return q_current;
    }
    if (depth >= max_depth) {
      continue;
    }
    let neighbors = neighbors_get(node);
    for (let n of neighbors) {
      let data = property_get(n, "data");
      let neighbor = property_get(n, "neighbor");
      let json3 = mapper(neighbor);
      let b = set_includes(visited, json3);
      if (not(b)) {
        queue.push({
          node: neighbor,
          data,
          previous: q_current,
          depth: text_combine(depth, 1),
        });
      }
    }
  }
  let r = {
    found: false,
  };
  return r;
}
