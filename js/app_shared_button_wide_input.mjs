import { arguments_assert } from "./arguments_assert.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_shared_button_wide_input(parent, text, input) {
  "$plain parent";
  "$plain text";
  "$plain input";
  "A wide button looking like every other button in the apps that presses a file box handed to it, which is hidden.";
  "The browser's own file box cannot be dressed like a button, so it is hidden and the button presses it. The press has to be the element's own click, made inside the person's tap - a click event made up by the page is not allowed to open a file picker.";
  "The box is emptied before each press, so choosing the same file twice in a row still counts as a choice.";
  arguments_assert(arguments, 3);
  html_display_none(input);
  function on_press() {
    let element = html_component_element_get(input);
    element.value = "";
    element.click();
  }
  let button = app_shared_button_wide(parent, text, on_press);
  return button;
}
