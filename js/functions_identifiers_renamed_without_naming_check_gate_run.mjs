import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { functions_identifiers_renamed_without_naming_check } from "./functions_identifiers_renamed_without_naming_check.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_identifiers_renamed_without_naming_check_gate_run() {
  "Gate: nothing walks all of a piece of code's words and writes over one without first asking which of those words merely names something.";
  "It ratchets against ZERO. The set was cleared on 2026-08-03 and there is nothing to grandfather, so a baseline would only give the next one somewhere to sit.";
  "This is the third time the same mistake has landed, each time in a different function, and each time it was found by somebody noticing rather than by anything failing. A gate on the shape is what a gate on any one of them could not be, because the harm is that the shape is easy to write and impossible to see afterwards.";
  "What it says is thrown as a record rather than printed and summed up in a sentence, because whoever reads a failure next reads it for names and cannot tell a name being accused from a name being named as the cure. The functions at fault are the record; the two commands that repair them, and the words each one walked, are advice and sit under the hint the reader drops before it looks.";
  let offenders = await functions_identifiers_renamed_without_naming_check();
  let names = list_map_property(offenders, "f_name");
  let f_name = fn_name("js_identifiers_referenced_nodes");
  let f_name3 = fn_name("js_shorthand_properties_expand");
  let advice = text_combine_multiple([
    "these write over words they never asked about - ",
    f_name,
    " hands back the words that read a value and leaves out the ones that only name something, and ",
    f_name3,
    " writes a short entry out in full first so its key stops being its value too",
  ]);
  let hint = {
    advice,
    offenders,
  };
  list_empty_is_assert_json(names, {
    hint,
  });
  let r = {
    renaming_unasked: 0,
  };
  return r;
}
