import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { function_parameters_count } from "./function_parameters_count.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function functions_parameters_counts() {
  "Every function in this repo beside how many things a caller has to line up for it, longest row first.";
  "The ranking is the whole point of asking. A list in name order says nothing anybody can act on; the top of a list sorted by the row is the next call worth collapsing into a record, and the number at the top is what the ceiling gate measures.";
  let love = await repo_love_functions_names();
  let measured = [];
  for (let f_name of love) {
    let count = await function_parameters_count(f_name);
    let entry = {
      name: f_name,
      count,
    };
    list_add(measured, entry);
  }
  function count_read(entry) {
    let count = property_get(entry, "count");
    return count;
  }
  let ranked = list_sort_number_mapper_reverse(measured, count_read);
  return ranked;
}
