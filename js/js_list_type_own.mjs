import { property_in_list_not } from "./property_in_list_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { js_types_function_node } from "./js_types_function_node.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_list_type_own(node, node_type) {
  arguments_assert(arguments, 2);
  ("The nodes of one kind that this piece of code reaches when it runs, leaving out everything written inside a function along the way.");
  ("★ THE TWIN BESIDE THIS ONE REACHES EVERYTHING WRITTEN INSIDE, WHICH IS A DIFFERENT QUESTION FROM WHAT RUNS. A job written down inside a loop and handed to a button is not a job the loop does: the loop only hands it over, and what calls it is a finger on a screen, some time later and perhaps never. A reading that asked where a line was written could not tell those two apart, and said the loop did the job.");
  ("The kind asked for is meant to be something other than a function, because a function written inside a function is exactly what this leaves out, and asking for those would answer with the ones at the top and nothing else.");
  ("What is inside a function is worked out by gathering it rather than by walking in and stopping, because the walk underneath goes all the way down and takes no word about where to halt. Gathering costs a second pass over the same piece and needs nothing new underneath it.");
  let inner = [];
  function nested_read(visited) {
    let f = property_get(visited, "node");
    let founds = js_list_type(f, node_type);
    function found_read(found) {
      let n = property_get(found, "node");
      list_add(inner, n);
    }
    each(founds, found_read);
  }
  let types = js_types_function_node();
  function type_read(type) {
    let fs = js_list_type(node, type);
    each(fs, nested_read);
  }
  each(types, type_read);
  function own_is(visited) {
    let own = property_in_list_not(visited, "node", inner);
    return own;
  }
  let all = js_list_type(node, node_type);
  let own = list_filter(all, own_is);
  return own;
}
