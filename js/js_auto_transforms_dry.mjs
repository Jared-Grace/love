import { js_auto_transforms } from "./js_auto_transforms.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
import { js_outside_move_dry } from "./js_outside_move_dry.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_replace } from "./list_replace.mjs";
export function js_auto_transforms_dry() {
  "The normalize steps with the one file-creating step swapped for the version that creates nothing. Derived from the real list rather than written out again, so a step added to the pipeline is included here without anyone having to remember to add it.";
  "Looking the step up by identity is deliberate: if it is ever renamed or dropped from the real list, this throws rather than quietly handing back a list that still creates files.";
  let transforms = js_auto_transforms();
  let index = list_index_of(transforms, js_outside_move);
  list_replace(transforms, index, js_outside_move_dry);
  return transforms;
}
