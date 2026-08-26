import { property_path_get_2 } from "./property_path_get_2.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { app_shared_hash_fields_unknown_several_text } from "./app_shared_hash_fields_unknown_several_text.mjs";
import { list_first } from "./list_first.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { app_shared_hash_fields_unknown_number_text } from "./app_shared_hash_fields_unknown_number_text.mjs";
import { app_shared_hash_fields_unknown_named_text } from "./app_shared_hash_fields_unknown_named_text.mjs";
export function app_shared_hash_fields_unknown_heading(findings) {
  "The one line at the top of the screen a broken link lands on, naming what kind of thing the link got wrong.";
  "It names the kind when there is only one kind wrong, because that alone often tells a reader what happened. Two kinds wrong at once has no honest short name, so it says the general thing and leaves the naming to the rows underneath, which say it once each anyway.";
  "A field holding a count is said the other way round, because nothing is missing from what we have - every number is one we could be asked for.";
  "WHICH of the three is said is decided here; WHAT each of them says is not. Each saying is written out in every language the reader might read, and a saying with a name dropped into it cannot be built a word at a time without holding every language to english's order - so each one lives in its own function beside this, and this one only chooses between them.";
  function to_name(finding) {
    let field_name = property_path_get_2(finding, "field", "name");
    return field_name;
  }
  let distinct = list_map_unique(findings, to_name);
  let several = list_multiple_is(distinct);
  if (several) {
    let general = app_shared_hash_fields_unknown_several_text();
    return general;
  }
  let name = list_first(distinct);
  let first = list_first(findings);
  ("the word asked for here is marked as one that must not change, because it is also the name of a function. left plain the canonicalizing pass reads it as a reference to that function and writes it as one, and the day that function is renamed the property this asks for is renamed with it and quietly stops being found - which was watched happening.");
  let name_inner = text_frozen("number_is");
  let number_field_is = property_path_get_2(first, "field", name_inner);
  if (number_field_is) {
    let counted = app_shared_hash_fields_unknown_number_text(name);
    return counted;
  }
  let heading = app_shared_hash_fields_unknown_named_text(name);
  return heading;
}
