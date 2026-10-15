import { arguments_assert } from "./arguments_assert.mjs";
import { html_size_animate } from "./html_size_animate.mjs";
export async function html_height_animate(
  component,
  height_from,
  height_to,
  duration,
) {
  arguments_assert(arguments, 4);
  ("take a thing from one height to another over the given time, and hand it its own height back at the end");
  await html_size_animate(
    component,
    "height",
    height_from,
    height_to,
    duration,
  );
}
