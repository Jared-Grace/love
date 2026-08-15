import { arguments_assert } from "./arguments_assert.mjs";
import { html_height } from "./html_height.mjs";
import { html_height_animate } from "./html_height_animate.mjs";
import { html_height_style_clear } from "./html_height_style_clear.mjs";
export async function html_height_change_animate(
  component,
  change,
  duration,
) {
  arguments_assert(arguments, 3);
  ("make a change to what is inside a thing, and let the thing grow or shrink to its new size slowly instead of all at once");
  ("The change itself is instant - the words are swapped the moment they are asked for. What is slowed is only the room the thing takes up, so what stands underneath it slides to its new place instead of appearing there.");
  ("Measured twice around the change rather than being told the two heights, because the caller writing the new words has no way of knowing how tall they will turn out to be until the page has drawn them.");
  let height_from = html_height(component);
  change();
  ("any height still being held from a change that has not finished is let go before the new one is measured, or the measurement answers with the old height instead of the one the new words want");
  html_height_style_clear(component);
  let height_to = html_height(component);
  await html_height_animate(component, height_from, height_to, duration);
}
