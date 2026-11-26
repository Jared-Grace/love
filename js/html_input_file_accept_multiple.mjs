import { arguments_assert } from "./arguments_assert.mjs";
import { html_element } from "./html_element.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_on } from "./html_on.mjs";
export function html_input_file_accept_multiple(parent, accept, on_files) {
  "$plain parent";
  "$plain accept";
  "$plain on_files";
  "A box for choosing several files of a named kind at once off the machine the page is being read on, which hands the list chosen straight to whoever asked for it - the twin of the box for one file, for the screens where a person brings a whole batch of photos in at once.";
  "CHOOSING NOTHING IS NOT A CHOICE AND IS NOT PASSED ON, for the same reason as in the one-file box: a picker opened and closed again fires the same change as one that was used.";
  arguments_assert(arguments, 3);
  let component = html_element(parent, "input");
  html_attribute_set(component, "type", "file");
  html_attribute_set(component, "accept", accept);
  html_attribute_set(component, "multiple", "");
  function on_chosen() {
    let element = html_component_element_get(component);
    let chosen = Array.from(element.files);
    if (list_empty_is(chosen)) {
      return;
    }
    on_files(chosen);
  }
  html_on(component, "change", on_chosen);
  return component;
}
