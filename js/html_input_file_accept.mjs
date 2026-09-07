import { arguments_assert } from "./arguments_assert.mjs";
import { html_element } from "./html_element.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { equal } from "./equal.mjs";
import { html_on } from "./html_on.mjs";
export function html_input_file_accept(parent, accept, on_file) {
  "$plain parent";
  "$plain accept";
  "$plain on_file";
  "A box for choosing one file of a named kind off the machine the page is being read on, which hands the chosen file straight to whoever asked for it.";
  "NOTHING IS SENT ANYWHERE. A file chosen this way is read by the page itself, so a song or a video can be listened to and watched without being copied into the repo first, and whoever made it keeps it wherever they already keep it.";
  "THE KIND IS ASKED FOR RATHER THAN FIXED, AND ASKING FOR ONE IS NOT OPTIONAL. A picker showing every file on a phone is a picker somebody has to search, and on every screen that has wanted one of these the answer was only ever going to be one kind of file. Left open it would be the rare screen's convenience paid for by the common screen's search.";
  "CHOOSING NOTHING IS NOT A CHOICE AND IS NOT PASSED ON. A picker that is opened and closed again fires the same change as one that was used, and handing that on as a file would make every screen using this test for a file that is not there.";
  arguments_assert(arguments, 3);
  let component = html_element(parent, "input");
  html_attribute_set(component, "type", "file");
  html_attribute_set(component, "accept", accept);
  function on_chosen() {
    let element = html_component_element_get(component);
    let chosen = element.files[0];
    let none = equal(chosen, undefined);
    if (none) {
      return;
    }
    on_file(chosen);
  }
  html_on(component, "change", on_chosen);
  return component;
}
