import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_style_rotate_degrees_set(component, degrees) {
  arguments_assert(arguments, 2);
  ("Turn one element by so many degrees clockwise, and leave everything else about it alone.");
  ("The turn is written as the whole of the element's transform, so an element aimed by this may hold NOTHING else there - no shifting, no scaling. That is why the things this aims are wrappers with one job each: a wrapper that only ever turns can be re-aimed a hundred times a second without anybody having to rebuild the rest of a transform and get the order of its parts right.");
  let transform = text_combine_3("rotate(", degrees, "deg)");
  html_style_set(component, "transform", transform);
}
