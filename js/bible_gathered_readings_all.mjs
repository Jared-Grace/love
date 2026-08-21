import { bible_event_reading_function_names } from "./bible_event_reading_function_names.mjs";
import { function_run } from "./function_run.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export async function bible_gathered_readings_all() {
  "Every reading of a gathered Bible event there is, from every book that has been read, as one list.";
  "The twin of the function that hands back every gathered event. The two lists are meant to line up one for one, and a gate says so; keeping the two ways of asking symmetrical is what makes that comparison a single line rather than a walk over two shapes.";
  let f_names = await bible_event_reading_function_names();
  async function run_readings(f_name) {
    let readings = await function_run(f_name, []);
    return readings;
  }
  let readings_lists = await list_map_async(f_names, run_readings);
  let readings = list_concat_multiple(readings_lists);
  return readings;
}
