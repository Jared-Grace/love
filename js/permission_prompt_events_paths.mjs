import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { permission_prompt_events_file } from "./permission_prompt_events_file.mjs";
export async function permission_prompt_events_paths(
  paths,
  days,
  seconds_minimum,
) {
  "Scans the given transcripts for calls that took at least seconds_minimum to come back, then cuts the results to the last days.";
  "The window has to be applied to the EVENTS and not only to the files: a session touched an hour ago still carries every call it ever made, so filtering by file alone would quietly report last week as today - the exact mistake that would make this useless for checking whether a fix took.";
  let left = Number(seconds_minimum);
  let wait_minimum = multiply(left, 1000);
  async function scan(file_path) {
    let p = await permission_prompt_events_file(file_path, wait_minimum);
    return p;
  }
  let lists = await list_map_unordered_async(paths, scan);
  let left2 = Number(days);
  let left3 = multiply(left2, 24);
  let left4 = multiply(left3, 60);
  let left5 = multiply(left4, 60);
  let span = multiply(left5, 1000);
  let left6 = date_now_milliseconds();
  let difference = subtract(left6, span);
  let cutoff = new Date(difference).toISOString();
  let events = [];
  for (let list of lists) {
    function within(event) {
      let b = greater_than(event.at, cutoff);
      return b;
    }
    let recent = list_filter(list, within);
    list_add_multiple(events, recent);
  }
  return events;
}
