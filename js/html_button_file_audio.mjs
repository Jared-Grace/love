import { arguments_assert } from "./arguments_assert.mjs";
import { html_input_file_audio } from "./html_input_file_audio.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_button } from "./html_button.mjs";
export function html_button_file_audio(parent, text, on_file) {
  arguments_assert(arguments, 3);
  ("$plain parent");
  ("$plain text");
  ("$plain on_file");
  ("A button carrying words of its own that opens the picker for one sound file, and hands the chosen file to whoever asked.");
  ("THE BROWSER'S OWN FILE BOX IS SMALL AND SAYS NO FILE CHOSEN, which reads as a status rather than as something to press. A button saying what it opens is found at a glance, so the box is kept for its picker and hidden, and the button asks it to open.");
  let input = html_input_file_audio(parent, on_file);
  html_display_none(input);
  function on_press() {
    let element = html_component_element_get(input);
    element.click();
  }
  let button = html_button(parent, text, on_press);
  return button;
}
