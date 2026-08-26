import { g_z_layer_step } from "./g_z_layer_step.mjs";
import { multiply } from "./multiply.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function g_z(z) {
  "Which drawing layer a named part of a map belongs on, as a z-index.";
  "The layers are spaced apart rather than numbered one after another, so that each one has";
  "room inside it for the things standing on it to be ordered among themselves - which is";
  "what lets two people walking over the same ground be told apart by how far down the";
  "screen they are.";
  let index = list_index_of(
    [
      "tile",
      "ground_tint",
      "character",
      "icon",
      "tutorial",
      "click",
      "tint",
      "overlay",
      "raised",
    ],
    z,
  );
  let right = g_z_layer_step();
  let layer = multiply(index, right);
  return layer;
}
