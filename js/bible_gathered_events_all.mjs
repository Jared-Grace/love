import { bible_gathered_event_function_names } from "./bible_gathered_event_function_names.mjs";
import { function_run } from "./function_run.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export async function bible_gathered_events_all() {
  "Every gathered Bible event there is, from every gathered span, as one list.";
  "The spans are asked in the order their function names sort, and the names carry a zero-padded chapter number, so that order is the book's order. Anything reading the whole corpus wants it that way, and getting it here means no caller has to know that the sorting is what makes it true.";
  "It exists because the corpus is split across files for the sake of whoever edits it, and a consumer should not have to know how the editing was divided up. A reading, a tally and a gate all want the same thing: all of them.";
  let f_names = await bible_gathered_event_function_names();
  async function run_gathered(f_name) {
    let events = await function_run(f_name, []);
    return events;
  }
  let events_lists = await list_map_async(f_names, run_gathered);
  let events = list_concat_multiple(events_lists);
  return events;
}
