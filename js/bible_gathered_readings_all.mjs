import { bible_event_reading_function_names } from "./bible_event_reading_function_names.mjs";
import { function_names_run_concat } from "./function_names_run_concat.mjs";
export async function bible_gathered_readings_all() {
  "Every reading of a gathered Bible event there is, from every book that has been read, as one list.";
  "The twin of the function that hands back every gathered event. The two lists are meant to line up one for one, and a gate says so; keeping the two ways of asking symmetrical is what makes that comparison a single line rather than a walk over two shapes.";
  let f_names = await bible_event_reading_function_names();
  let readings = await function_names_run_concat(f_names);
  return readings;
}
