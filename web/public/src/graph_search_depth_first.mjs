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
    depth: 0,
  });
  while (queue.length > 0) {
    const q_current = queue.shift();
    let depth = property_get(q_current, "depth");
    let node = property_get(q_current, "node");
    let json = mapper(node);
    let i = set_includes(visited, json);
    if (i) {
      continue;
    }
    let m = mapper(node);
    let r4 = set_add(visited, m);
    if (equal(m, mt)) {
      let r2 = {
        found: true,
        node,
        depth,
      };
      return r2;
    }
    if (depth >= max_depth) {
      continue;
    }
    const neighbors = neighbors_get(node) || [];
    for (const n of neighbors) {
      let json3 = mapper(n);
      let b = set_includes(visited, json3);
      if (not(b)) {
        queue.push({
          node: n,
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
