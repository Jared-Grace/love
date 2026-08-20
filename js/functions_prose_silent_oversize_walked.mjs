import { arguments_assert } from "./arguments_assert.mjs";
import { functions_prose } from "./functions_prose.mjs";
import { functions_work_sizes } from "./functions_work_sizes.mjs";
import { functions_prose_silent_size_floor } from "./functions_prose_silent_size_floor.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function functions_prose_silent_oversize_walked() {
  "Every function big enough that its name alone cannot say what it is for, which says nothing about itself, biggest first - and how many functions were measured to find them.";
  "The count travels with the list because the two ways this comes back empty are opposite and the list alone cannot tell them apart: a repo where every sizeable function has been described, or a reading that stopped finding functions at all. Only the second is a fault, and only the count falls when it happens.";
  "It measures each function once and answers both the list a person reads and the names a gate ratchets against. Measuring the whole repo is the expensive half, so asking it twice to get the same answer in two shapes would double the cost of the run that does both.";
  arguments_assert(arguments, 0);
  let sizes = await functions_work_sizes();
  let prose = await functions_prose();
  let size_floor = functions_prose_silent_size_floor();
  let silent = [];
  for (let entry of sizes) {
    let size = property_get(entry, "size");
    let small = less_than(size, size_floor);
    if (small) {
      continue;
    }
    let f_name = property_get(entry, "name");
    let said = property_exists_not(prose, f_name);
    if (not(said)) {
      continue;
    }
    list_add(silent, entry);
  }
  let r = {
    walked: sizes.length,
    silent,
  };
  return r;
}
