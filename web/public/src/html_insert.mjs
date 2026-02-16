import { assert } from "../../../love/public/src/assert.mjs";
import { less_than_equal } from "../../../love/public/src/less_than_equal.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_insert(parent, child, index) {
  let parent_c = html_component_element_get(parent);
  let child_c = html_component_element_get(child);
  let pcl = parent_c.children.length;
  let le = less_than_equal(index, pcl);
  assert(le);
  if (index > pcl) {
    parent_c.appendChild(child_c);
  } else {
    if (index === pcl) {
      parent_c.appendChild(child_c);
    } else {
      parent_c.insertBefore(child_c, parent_c.children[index]);
    }
  }
}
