import { html_parent_append } from "../../../love/public/src/html_parent_append.mjs";
import { less_than_equal_assert } from "../../../love/public/src/less_than_equal_assert.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_insert(parent, child, index) {
  let parent_c = html_component_element_get(parent);
  let child_c = html_component_element_get(child);
  let pcl = parent_c.children.length;
  less_than_equal_assert(index, pcl);
  if (index === pcl) {
    html_parent_append(parent_c, child_c);
  } else {
    parent_c.insertBefore(child_c, parent_c.children[index]);
  }
}
