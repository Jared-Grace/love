import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { property_get } from "./property_get.mjs";
export function js_node_inside_any_is(node, holders) {
  "Whether one node sits somewhere inside any of these others, judged by where each one starts and ends in the file rather than by walking down to look for it.";
  "A parsed node carries the two places it spans between, and a node inside another spans between two places inside that other's two. So the question a walk answers in a descent answers here in a comparison, and the caller does not have to hold on to how it got to either node.";
  let start = property_get(node, "start");
  let end = property_get(node, "end");
  for (let holder of holders) {
    let holder_start = property_get(holder, "start");
    let holder_end = property_get(holder, "end");
    let after_is = greater_than_equal(start, holder_start);
    let before_is = less_than_equal(end, holder_end);
    if (after_is && before_is) {
      let yes = true;
      return yes;
    }
  }
  let no = false;
  return no;
}
