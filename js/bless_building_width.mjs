import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_families } from "./bless_building_families.mjs";
import { bless_family_width } from "./bless_family_width.mjs";
import { multiply } from "./multiply.mjs";
export function bless_building_width(building) {
  arguments_assert(arguments, 1);
  ("How many squares across the front of the building at this number is.");
  ("It is its families laid side by side and nothing else - one slab each, every slab the same width, nothing left over. So the width is not a setting anybody chose; it falls out of how many doors the building has, and it cannot come to disagree with them.");
  ("Written the other way round - a width chosen and the doors fitted into it - the two would drift the first time a building held a different number of homes, and the front row would go on being drawn while quietly no longer saying anything true about who lives behind it.");
  let families = bless_building_families(building);
  let slab = bless_family_width();
  let width = multiply(families, slab);
  return width;
}
