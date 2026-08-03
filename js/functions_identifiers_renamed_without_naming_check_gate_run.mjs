import { functions_identifiers_renamed_without_naming_check } from "./functions_identifiers_renamed_without_naming_check.mjs";
import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_identifiers_renamed_without_naming_check_gate_run() {
  "Gate: nothing walks all of a piece of code's words and writes over one without first asking which of those words merely names something.";
  "It ratchets against ZERO. The set was cleared on 2026-08-03 and there is nothing to grandfather, so a baseline would only give the next one somewhere to sit.";
  "This is the third time the same mistake has landed, each time in a different function, and each time it was found by somebody noticing rather than by anything failing. A gate on the shape is what a gate on any one of them could not be, because the harm is that the shape is easy to write and impossible to see afterwards.";
  let offenders = await functions_identifiers_renamed_without_naming_check();
  for (let offender of offenders) {
    let f_name = property_get(offender, "f_name");
    let joined = property_list_join_comma(offender, "walked");
    console.log("RENAMES WITHOUT ASKING  " + f_name + "  " + joined);
  }
  let size = list_size(offenders);
  let any = greater_than(size, 0);
  if (any) {
    let f_name2 = fn_name("js_identifiers_referenced_nodes");
    let f_name3 = fn_name("js_shorthand_properties_expand");
    throw new Error(
      "identifiers renamed without naming check gate: " +
        size +
        text_combine_multiple([
          " write over words they never asked about - ",
          f_name2,
          " hands back the words that read a value and leaves out the ones that only name something, and ",
          f_name3,
          " writes a short entry out in full first so its key stops being its value too",
        ]),
    );
  }
  let r = {
    renaming_unasked: 0,
  };
  return r;
}
