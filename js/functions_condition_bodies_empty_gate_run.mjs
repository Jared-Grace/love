import { functions_condition_bodies_empty } from "./functions_condition_bodies_empty.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_condition_bodies_empty_gate_run() {
  "Gate: no function may ask a question and open an empty block for the answer.";
  "It ratchets against ZERO rather than against a baseline. The whole set was";
  "cleared on 2026-08-02 - three sites, in the call expander, in the sermon prompt";
  "builder, and in the messenger reply - so there is nothing here to grandfather,";
  "and a baseline would only be a place for the next one to be added quietly.";
  "The one that found this asked whether a name matched the name being searched";
  "for and did nothing either way, so a request for one named list handed back";
  "every named list in the file. Two callers happened to mask it. That is the";
  "shape: the guard reads as being there and is not there.";
  let offenders = await functions_condition_bodies_empty();
  for (let offender of offenders) {
    let f_name = property_get(offender, "name");
    let kinds = property_get(offender, "kinds");
    console.log("EMPTY ANSWER  " + f_name + "  -> " + list_join_comma(kinds));
  }
  let size = list_size(offenders);
  let any = greater_than(size, 0);
  if (any) {
    throw new Error(
      "condition bodies empty gate: " +
        size +
        " functions ask a question and do nothing with the answer - write the body that was meant to go there, or remove the question along with whatever was worked out only to feed it",
    );
  }
  let r = {
    empty: 0,
  };
  return r;
}
