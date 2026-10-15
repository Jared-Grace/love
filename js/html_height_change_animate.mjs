import { arguments_assert } from "./arguments_assert.mjs";
import { html_size_change_animate } from "./html_size_change_animate.mjs";
export async function html_height_change_animate(
  shell,
  inside,
  change,
  duration,
) {
  arguments_assert(arguments, 4);
  ("swap what a piece of page says, and let the page take up the difference in height slowly: the old words go at once, the shell slides to the height of the new ones, and the new ones are shown once it has arrived");
  await html_size_change_animate(shell, "height", inside, change, duration);
}
