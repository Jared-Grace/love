import { functions_names } from "./functions_names.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function bible_event_reading_function_names() {
  "The name of every function that hands back readings of gathered Bible events, found by the one prefix they all share rather than from a list anybody has to keep up to date.";
  "Reading a book is what puts it under the gate, with nothing else to remember. The same reason the gathered spans are found this way.";
  "The prefix is deliberately close to the gathered one without overlapping it: a gathered span begins bible_events_ and a reading begins bible_event_readings_, so neither finder can pick up the other's functions. If a third kind of record is ever added, check that new prefix against both of these before choosing it.";
  let f_names = await functions_names();
  let readings = list_filter_starts_with(f_names, "bible_event_readings_");
  let sorted = list_sort_text(readings);
  return sorted;
}
