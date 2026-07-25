import { js_auto_transforms } from "./js_auto_transforms.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
import { js_outside_move_dry } from "./js_outside_move_dry.mjs";
import { list_replace_item } from "./list_replace_item.mjs";
export function js_auto_transforms_dry() {
  "The normalize steps with the one file-creating step swapped for the version that creates nothing. Derived from the real list rather than written out again, so a step added to the pipeline is dry by default and cannot be forgotten here.";
  let transforms = js_auto_transforms();
  let dry = list_replace_item(transforms, js_outside_move, js_outside_move_dry);
  return dry;
}
