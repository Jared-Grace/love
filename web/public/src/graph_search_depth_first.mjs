import { property_get } from "../../../love/public/src/property_get.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { add } from "../../../love/public/src/add.mjs";
export function graph_search_depth_first({
  start,
  neighbors_get,
  max_depth = Infinity,
  target,
}) {
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
    if (node === target) {
      let r = {
        found: true,
        node,
        depth,
      };
      return r;
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
  let r2 = {
    found: false,
  };
  return r2;
}
