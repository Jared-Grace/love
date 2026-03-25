import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_pop_first } from "../../../love/public/src/list_pop_first.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { set_add } from "../../../love/public/src/set_add.mjs";
import { set_includes } from "../../../love/public/src/set_includes.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { not } from "../../../love/public/src/not.mjs";
export function graph_search_depth_first(
  start,
  neighbors_get,
  mapper,
  max_depth,
  target,
) {
  let mt = mapper(target);
  const visited = new Set();
  const queue = [];
  queue.push({
    node: start,
    data: null,
    previous: null,
    depth: 0,
  });
  let ne = list_empty_not_is(list);
  while (queue.length > 0) {
    const q_current = list_pop_first(queue);
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
      object_merge(q_current, {
        found: true,
      });
      return q_current;
    }
    if (depth >= max_depth) {
      continue;
    }
    const neighbors = neighbors_get(node);
    for (const n of neighbors) {
      let data = property_get(n, "data");
      let neighbor = property_get(n, "neighbor");
      let json3 = mapper(neighbor);
      let b = set_includes(visited, json3);
      if (not(b)) {
        queue.push({
          node: neighbor,
          data,
          previous: q_current,
          depth: depth + 1,
        });
      }
    }
  }
  let r = {
    found: false,
  };
  return r;
}
