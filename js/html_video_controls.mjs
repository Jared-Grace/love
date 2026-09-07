import { arguments_assert } from "./arguments_assert.mjs";
import { html_element } from "./html_element.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_width_full } from "./html_width_full.mjs";
export function html_video_controls(parent) {
  "$plain parent";
  "A video player carrying the browser's own controls - play, pause, a bar to drag, and the time running.";
  "THE BROWSER'S CONTROLS ARE BORROWED RATHER THAN BUILT, the same argument the sound player makes: the controls a person already knows are the ones they can work without looking, and dragging accurately through three minutes is a hard thing to build well and a free thing to take.";
  "IT IS TOLD TO PLAY INSIDE THE PAGE. Left alone, a phone takes a playing video full screen, and full screen hides whatever is underneath it - which on the one screen this was built for is the box the watching exists to fill in. Somebody would watch a psalm through, come back out, and have to find the moment again before they could say what was wrong with it.";
  arguments_assert(arguments, 1);
  let component = html_element(parent, "video");
  html_attribute_set(component, "controls", "controls");
  html_attribute_set(component, "playsinline", "playsinline");
  html_width_full(component);
  return component;
}
