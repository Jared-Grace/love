import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_class_has(component, name) {
  arguments_assert(arguments, 2);
  ("Whether an element is currently wearing a named class.");
  ("The read half of adding and removing one. A class on a container is how this repo says a");
  ("thing about everything inside it at once - held still, hidden, celebrating - and until");
  ("now only the writing half had a name, so anything wanting to ASK had to reach for the");
  ("browser itself and the question went unnamed.");
  ("Asked of the component rather than of the element, like every other class call here, so");
  ("a wrapper and a bare element answer the same way.");
  let element = html_component_element_get(component);
  let list = element.classList;
  let has = list.contains(name);
  return has;
}
