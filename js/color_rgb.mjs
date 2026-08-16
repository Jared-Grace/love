import { list_get } from "./list_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function color_rgb(parts) {
  arguments_assert(arguments, 1);
  ("a colour held as its three parts, written out the way a page reads one: rgb(37, 99, 235)");
  ("Parts are what a colour is worked out in - stepped from one colour toward another, lightened, compared - and the written-out form is the only thing a page accepts. Kept apart, a colour is worked out once and written out wherever it is used, rather than each place spelling the same three numbers back into the same shape of text.");
  let r = list_get(parts, 0);
  let g = list_get(parts, 1);
  let b = list_get(parts, 2);
  let color = text_combine_multiple(["rgb(", r, ", ", g, ", ", b, ")"]);
  return color;
}
