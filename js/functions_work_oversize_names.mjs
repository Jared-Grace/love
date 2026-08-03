import { functions_work_sizes } from "./functions_work_sizes.mjs";
import { functions_work_size_ceiling } from "./functions_work_size_ceiling.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_work_oversize_names() {
  ("Every function holding more lines of work than one may.");
  ("The ceiling is read here rather than received, so the gate and anybody asking the question by hand cannot be measuring against two different numbers - which is the way a ceiling quietly stops meaning anything.");
  let ranked = await functions_work_sizes();
  let ceiling = functions_work_size_ceiling();
  let over = [];
  for (let entry of ranked) {
    let size = property_get(entry, "size");
    let too_big = greater_than(size, ceiling);
    if (too_big) {
      let name = property_get(entry, "name");
      list_add(over, name);
    }
  }
  return over;
}
