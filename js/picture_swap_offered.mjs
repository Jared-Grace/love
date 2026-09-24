import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export function picture_swap_offered(swap) {
  "$plain swap";
  "The pictures a row of choices shows for one place, in the order it shows them: the picture now in place, labelled now, unless the place asks for it to be left off, then each one offered for its place.";
  "IT IS ITS OWN UNIT BECAUSE TWO QUESTIONS ASK IT: which pictures to draw, and whether one of them is already approved. Asked twice in two ways, a picture left off the screen could still count as approved, and a place would vanish over a choice nobody could see.";
  arguments_assert(arguments, 1);
  let offered = [];
  let original_hide = property_get_or(swap, "original_hide", false);
  if (not(original_hide)) {
    list_add(offered, {
      label: "now",
      path: property_get(swap, "before"),
    });
  }
  for (let candidate of property_get(swap, "after")) {
    list_add(offered, {
      label: property_get(candidate, "label"),
      path: property_get(candidate, "path"),
    });
  }
  return offered;
}
