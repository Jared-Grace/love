import { arguments_assert } from "./arguments_assert.mjs";
import { html_animate_start } from "./html_animate_start.mjs";
export async function html_animate(component, keyframes, options) {
  arguments_assert(arguments, 3);
  ("Plays a list of keyframes on one element and finishes when the animation does.");
  let animation = html_animate_start(component, keyframes, options);
  await animation.finished;
}
