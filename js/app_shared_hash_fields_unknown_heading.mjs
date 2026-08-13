import { property_get } from "./property_get.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { list_first } from "./list_first.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_hash_fields_unknown_heading(findings) {
  "The one line at the top of the screen a broken link lands on, naming what kind of thing the link got wrong.";
  "It names the kind when there is only one kind wrong, because that alone often tells a reader what happened - they recognise the language they meant to ask for and see the letter they missed. Two kinds wrong at once has no honest short name, so it says the general thing and leaves the naming to the rows underneath, which say it once each anyway.";
  "A field holding a count is said the other way round. Nothing is missing from what we have - every number is one we could be asked for - so what went wrong is that the word in the link is not a number at all, and saying we do not have it would send a reader looking for something that was never the trouble.";
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
  let first = list_first(findings);
  ("the field is taken out of the finding and then asked, rather than reached through in one step, because the word for the property is also the name of a function - reached through in one step the canonicalizing pass reads it as a reference to that function and writes it as one, and the day that function is renamed the property this asks for is renamed with it and quietly stops being found");
  let field = property_get(first, "field");
  let number_is = property_get(field, "number_is");
  if (number_is) {
    let counted = text_combine_multiple([
      "The ",
      name,
      " in this link is not a number",
    ]);
    return counted;
  }
  let heading = text_combine_multiple([
    "This link asks for a ",
    name,
    " we do not have",
  ]);
  return heading;
}
