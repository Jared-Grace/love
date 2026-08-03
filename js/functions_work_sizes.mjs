import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_work_size } from "./function_work_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_work_sizes() {
  "Every function in this repo beside how many lines of work it holds, biggest first.";
  "The ranking is the whole point of asking. A list of sizes in name order says nothing a reader can act on; the top of a list sorted by size is the next refactor, and the number at the top is what the ceiling gate measures.";
  let love = await repo_functions_names("love");
  let measured = [];
  for (let f_name of love) {
    let size = await function_work_size(f_name);
    let entry = {
      name: f_name,
      size,
    };
    list_add(measured, entry);
  }
  function size_read(entry) {
    let size = property_get(entry, "size");
    return size;
  }
  let ranked = list_sort_number_mapper_reverse(measured, size_read);
  return ranked;
}
