import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { property_get } from "./property_get.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
export function html_parent_get(component) {
  "The box this one was drawn into, handed back as a component like anything else drawn.";
  "IT IS HERE BECAUSE SCROLLING BELONGS TO A BOX FURTHER OUT THAN THE ONE A SCREEN IS GIVEN. Everything else about a box is reachable from the box itself, so the way outward was never wanted; a scrolling panel is the exception, because what a reader scrolls is the panel while what a screen draws into is a column some way inside it. A screen handed only the column had no way to name the thing it is scrolling.";
  "IT WRAPS RATHER THAN HANDING THE ELEMENT BACK BARE, so what comes out goes straight into any of the other drawing words. Handing the element back would make this the one member of the family whose answer has to be converted before it is usable, and the conversion would then be written at every call.";
  arguments_assert(arguments, 1);
  let element = html_component_element_get(component);
  let parent = property_get(element, "parentElement");
  let wrapped = html_component_wrap(parent);
  return wrapped;
}
