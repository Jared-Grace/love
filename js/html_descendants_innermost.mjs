import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
export function html_descendants_innermost(component) {
  arguments_assert(arguments, 1);
  ("every piece inside a thing that holds no further pieces of its own - the words and symbols themselves rather than the wrappers standing around them");
  ("The innermost ones only, because none of them can be inside another one. Anything that moves a piece moves everything the piece contains along with it, so a wrapper and its contents both being asked to move would move the contents twice as far - and the outer ones are exactly the wrappers.");
  let element = html_component_element_get(component);
  let v = element.querySelectorAll("*");
  let all = Array.from(v);
  function innermost_is(inner) {
    let count = inner.children.length;
    let childless = equal(count, 0);
    return childless;
  }
  let innermost = list_filter(all, innermost_is);
  let components = list_map(innermost, html_component_wrap);
  return components;
}
