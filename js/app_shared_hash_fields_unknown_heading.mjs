import { property_path_get_2 } from "./property_path_get_2.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { list_first } from "./list_first.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_hash_fields_unknown_heading(findings) {
  "The one line at the top of the screen a broken link lands on, naming what kind of thing the link got wrong.";
  "It names the kind when there is only one kind wrong, because that alone often tells a reader what happened - they recognise the language they meant to ask for and see the letter they missed. Two kinds wrong at once has no honest short name, so it says the general thing and leaves the naming to the rows underneath, which say it once each anyway.";
  function to_name(finding) {
    let field_name = property_path_get_2(finding, "field", "name");
    return field_name;
  }
  let distinct = list_map_unique(findings, to_name);
  let several = list_multiple_is(distinct);
  if (several) {
    let general = "This link asks for things we do not have";
    return general;
  }
  let name = list_first(distinct);
  let heading = text_combine_multiple([
    "This link asks for a ",
    name,
    " we do not have",
  ]);
  return heading;
}
