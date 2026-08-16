import { list_is } from "./list_is.mjs";
import { gloss_entries_key } from "./gloss_entries_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { json_parse_try } from "./json_parse_try.mjs";
import { null_is } from "./null_is.mjs";
export function gloss_passage_entries(passage) {
  "The word explanations a gloss passage carries, as a list.";
  "They are held as one piece of text rather than as a list, because that is the shape the store was built in and the shape the page reads back. A passage nobody has authored yet, and one whose text will not parse, both come back as no explanations at all - either way there is nothing there to show a reader.";
  "Two shapes arrive here and both are answered. The chapters written earlier hold a bare list. The writing service now has to answer in object form, so a chapter written today holds the list inside an object under one agreed name, and it is unwrapped on the way out - which is what lets the older chapters keep being read without being rewritten.";
  "Anything else that parses comes back as no explanations rather than as itself. A single explanation handed back where a list was meant reads as a list of its own letters further down the line and says nothing while it does it, so it is refused here instead.";
  let value = property_get_or_null(passage, "generated");
  if (null_is(value)) {
    let empty = [];
    return empty;
  }
  let items = json_parse_try(value);
  if (null_is(items)) {
    let none = [];
    return none;
  }
  let listed = list_is(items);
  if (listed) {
    return items;
  }
  let property = gloss_entries_key();
  let held = property_get_or_null(items, property);
  let held_listed = list_is(held);
  if (held_listed) {
    return held;
  }
  let nothing = [];
  return nothing;
}
