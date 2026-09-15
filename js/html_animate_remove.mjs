import { arguments_assert } from "./arguments_assert.mjs";
import { html_animate_start } from "./html_animate_start.mjs";
import { html_remove } from "./html_remove.mjs";
export function html_animate_remove(component, keyframes, options) {
  arguments_assert(arguments, 3);
  ("Plays a list of keyframes on an element that exists only to be seen once - a spark, a flash - and takes it off the page when the animation ends.");
  ("Nothing waits for it. Whoever made the element has already moved on, and a page left holding every spark ever thrown would grow for as long as the game is open.");
  let animation = html_animate_start(component, keyframes, options);
  function finished() {
    html_remove(component);
  }
  animation.onfinish = finished;
}
