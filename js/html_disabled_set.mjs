import { html_component_element_get } from "./html_component_element_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function html_disabled_set(component, disabled) {
  "$plain disabled";
  "turn a button off, or back on: off, a click on it does nothing and the keyboard skips over it.";
  "THE BROWSER'S OWN SWITCH AND NOT A LOOK PAINTED ON, because only the switch actually stops the click. A button that is merely greyed still fires, which is worse than one that looks alive - the reader is told nothing will happen and then something does.";
  "How a switched-off button LOOKS is decided by whoever dresses the buttons, not here. This is the plain switch, and a page that dresses its buttons itself has to say the rest itself.";
  arguments_assert(arguments, 2);
  let element = html_component_element_get(component);
  element.disabled = disabled;
}
