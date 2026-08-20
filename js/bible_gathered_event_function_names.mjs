import { functions_names } from "./functions_names.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function bible_gathered_event_function_names() {
  "The name of every function that hands back gathered Bible events, found by the one prefix they all share rather than from a list anybody has to keep up to date.";
  "A list written by hand would go stale the moment a chapter is gathered and forgotten, and a gate reading a stale list passes by looking at the wrong things - so the set is derived, and gathering a chapter is enough to put it under the gate.";
  "This function is deliberately NOT named with that prefix itself. A finder that matches its own name hands itself back among its answers, and the caller then runs a function expecting events and gets names instead - a hazard no error reports, because both are lists of the right shape.";
  let f_names = await functions_names();
  let gathered = list_filter_starts_with(f_names, "bible_events_");
  let sorted = list_sort_text(gathered);
  return sorted;
}
