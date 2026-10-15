import { arguments_assert } from "./arguments_assert.mjs";
import { html_size } from "./html_size.mjs";
export function html_height(component) {
  arguments_assert(arguments, 1);
  ("how tall a thing is on the page right now, in pixels");
  let height = html_size(component, "height");
  return height;
}
