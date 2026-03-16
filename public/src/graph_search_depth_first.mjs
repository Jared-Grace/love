import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { add } from "../../../love/public/src/add.mjs";
export function graph_search_depth_first(
  start,
  neighbors_get,
  equal_is,
  max_depth,
  target,
) {
  const visited = new Set();
  const queue = [];
  queue.push({
    node: start,
    depth: 0,
  });
  while (queue.length > 0) {
    const r3 = queue.shift();
    let depth = property_get(r3, "depth");
    let node = property_get(r3, "node");
    if (visited.has(node)) {
      continue;
    }
    visited.add(node);
    log(graph_search_depth_first.name, {
      node,
    });
    if (equal_is(node, target)) {
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
      let b = visited.has(n);
      if (not(b)) {
        queue.push({
          node: n,
          depth: depth + 1,
        });
      }
    }
  }
  log(graph_search_depth_first.name, {
    visited,
  });
  let r = {
    found: false,
  };
  return r;
}
