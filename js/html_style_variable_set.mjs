import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_style_variable_set(component, name, value) {
  "set a style variable on one element. Everything drawn inside it reads that value, however deep and whenever it is drawn - which is what makes this the way to hand a colour down to a part somebody else paints later.";
  "the plain style setter next door cannot do this. It writes the name as a property of the style object, and a name beginning with two dashes is not one of those, so the write is quietly dropped and nothing says so.";
  arguments_assert(arguments, 3);
  let element = html_component_element_get(component);
  element.style.setProperty(name, value);
}
