import { html_parent_append } from "./html_parent_append.mjs";
import { less_than_equal_assert_json } from "./less_than_equal_assert_json.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_insert(parent, child, index) {
  let parent_e = html_component_element_get(parent);
  let child_e = html_component_element_get(child);
  let pcl = parent_e.children.length;
  less_than_equal_assert_json(index, pcl, {
    hint: "the insert index should be within the parent's current child count",
  });
  if (index === pcl) {
    html_parent_append(parent, child);
  } else {
    parent_e.insertBefore(child_e, parent_e.children[index]);
  }
}
