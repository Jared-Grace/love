import { arguments_assert } from "./arguments_assert.mjs";
import { html_height } from "./html_height.mjs";
import { html_height_animate } from "./html_height_animate.mjs";
import { html_height_hold_clear } from "./html_height_hold_clear.mjs";
import { html_style_overflow_hidden } from "./html_style_overflow_hidden.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
export async function html_height_change_animate(
  shell,
  inside,
  change,
  duration,
) {
  arguments_assert(arguments, 4);
  ("swap what a piece of page says, and let the page take up the difference slowly: the old words go at once, the shell slides to the size of the new ones, and the new ones are shown once it has arrived");
  ("The words are never seen moving. Reading and following are two things to ask of one pair of eyes at once, and the reader was doing neither well - so the moving is done with nothing to read, and the reading is offered once nothing is moving.");
  ("The change itself is instant. What is slowed is only the room the shell takes up, so what stands underneath it slides to its new place instead of appearing there.");
  ("Measured twice around the change rather than being told the two heights, because the caller writing the new words has no way of knowing how tall they will turn out to be until the page has drawn them.");
  ("What overflows is hidden BEFORE the first measurement, not at the moment the sliding starts, and this is the whole reason the shell does not jump. Hiding what overflows also stops a child's bottom margin reaching outside the shell: hidden, that margin counts inside the height, and unhidden it counts as space underneath instead. Measured one way and then held the other, the shell loses exactly that margin the instant it is held - which is seen as everything below it jumping, and then sliding back.");
  html_style_overflow_hidden(shell);
  let height_from = html_height(shell);
  change();
  ("any height still being held from a change that has not finished is let go before the new one is measured, or the measurement answers with the old height instead of the one the new words want");
  html_height_hold_clear(shell);
  let height_to = html_height(shell);
  html_visibility_hidden(inside);
  await html_height_animate(shell, height_from, height_to, duration);
  html_visibility_visible(inside);
}
