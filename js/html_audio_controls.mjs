import { arguments_assert } from "./arguments_assert.mjs";
import { html_element } from "./html_element.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_audio_controls(parent) {
  arguments_assert(arguments, 1);
  ("$plain parent");
  ("A sound player carrying the browser's own controls - play, pause, a bar to drag, and the time running.");
  ("THE BROWSER'S CONTROLS ARE BORROWED RATHER THAN BUILT, and on a phone that is not a saving of effort but a correctness argument: the controls a person already knows are the ones they can work without looking, and looking away from the screen is the whole point of a page somebody is listening along with. Dragging accurately through two minutes of sound is also a hard thing to build well and a free thing to take.");
  let component = html_element(parent, "audio");
  html_attribute_set(component, "controls", "controls");
  html_style_set(component, "width", "100%");
  return component;
}
