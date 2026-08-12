import { property_get_or_null } from "./property_get_or_null.mjs";
import { json_parse_try } from "./json_parse_try.mjs";
import { null_is } from "./null_is.mjs";
export function gloss_passage_entries(passage) {
  "The word explanations a gloss passage carries, as a list.";
  "They are held as one piece of text rather than as a list, because that is the shape the store was built in and the shape the page reads back. A passage nobody has authored yet, and one whose text will not parse, both come back as no explanations at all - either way there is nothing there to show a reader.";
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
  return items;
}
