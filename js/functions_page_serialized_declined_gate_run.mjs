import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_auto_declined_is } from "./function_auto_declined_is.mjs";
import { functions_page_serialized_report } from "./functions_page_serialized_report.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_page_serialized_declined_gate_run() {
  "QA gate: every function that hands work to a browser asks in writing to be left out of the canonicalizing pass";
  "Its neighbour catches the harm after it has been done - a function running in a browser that reads a name only this repo has. This one catches it before: a sweep picking files nobody chose is what writes that name, and the request is the only thing that turns a sweep aside";
  "The request has to be spelled the way its reader matches, which is the whole reason this is worth a gate. Three of these functions were already carrying the reason in their own words and none of it was read, so they were picked up by a repair pass twice in one morning and reported as still waiting both times. Prose that means the right thing and matches nothing is indistinguishable from silence";
  "It stands at zero rather than against a record of what is lived with. Every one of the twelve was made to ask on the day this was written, so a failure here is a new browser test written without the request rather than a standard being raised - and the fix is one command over the whole set";
  "Throws so the dispatcher seam exits nonzero";
  arguments_assert(arguments, 0);
  let exposed = await functions_page_serialized_report();
  let silent = [];
  async function lambda(one) {
    let f_name = property_get(one, "name");
    let asked_off = await function_auto_declined_is(f_name);
    if (asked_off) {
      return;
    }
    list_add(silent, f_name);
  }
  await each_async(exposed, lambda);
  list_empty_is_assert_json(silent, {
    hint: text_combine_multiple([
      "these functions hand work to a browser and nothing in them asks a sweep to keep away, so the next one to canonicalize the repo will rewrite a line where no gate can read the result - run ",
      fn_name("functions_page_serialized_decline"),
      " to have each of them ask",
    ]),
    silent,
  });
  let r = {
    exposed: list_size(exposed),
  };
  return r;
}
