import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_img_square_style_position_only } from "./g_img_square_style_position_only.mjs";
export function app_g_bless_vehicle_place(vehicle) {
  arguments_assert(arguments, 1);
  ("Put a car where its record says it is.");
  ("The one place a car moves through, so that where a car IS and where it is DRAWN cannot");
  ("come apart. Driving changes the numbers and calls this; nothing else touches the style.");
  ("It goes through the same square positioner every character and tile uses, which is what");
  ("gives a car the same sliding, the same square size and the same stacking by row as");
  ("everything else on the map. A car in the road is on a further row than a person on the");
  ("pavement, so the row stacking puts it in front of them without anything here saying so.");
  let element = property_get(vehicle, "element");
  let x = property_get(vehicle, "x");
  let y = property_get(vehicle, "y");
  g_img_square_style_position_only(element, x, y);
}
