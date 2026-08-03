import { functions_prose } from "./functions_prose.mjs";
import { functions_work_sizes } from "./functions_work_sizes.mjs";
import { functions_prose_silent_size_floor } from "./functions_prose_silent_size_floor.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function functions_prose_silent_oversize() {
  "Every function big enough that its name alone cannot say what it is for, which says nothing about itself, biggest first.";
  "Two thirds of the repo says nothing, and that is mostly right - an atom of three lines is described by its name and a sentence under it would only say the name again. So the whole silent list is not a job anybody could take. This is the part of it that is.";
  "The list is meant to be read, not enforced. Writing what a function is for is a judgment about the work, made by somebody who has read it, and a gate that failed until every name here had a sentence would be answered with sentences written to clear the gate. So this only says where the reading would pay.";
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
  return silent;
}
