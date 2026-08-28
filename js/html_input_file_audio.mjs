import { arguments_assert } from "./arguments_assert.mjs";
import { html_element } from "./html_element.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { equal } from "./equal.mjs";
import { html_on } from "./html_on.mjs";
export function html_input_file_audio(parent, on_file) {
  arguments_assert(arguments, 2);
  ("$plain parent");
  ("A box for choosing one sound file off the machine the page is being read on, which hands the chosen file straight to whoever asked for it.");
  ("NOTHING IS SENT ANYWHERE. A file chosen this way is read by the page itself, so a song can be listened to without being copied into the repo first, and a person timing one keeps it wherever they already keep it.");
  ("Only sound is offered, because a picker showing every file on a phone is a picker somebody has to search, and the answer is always a song.");
  let component = html_element(parent, "input");
  html_attribute_set(component, "type", "file");
  html_attribute_set(component, "accept", "audio/*");
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
