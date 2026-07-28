import { literals_frozen_names } from "./literals_frozen_names.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_read } from "./file_read.mjs";
import { js_code_getter_literal } from "./js_code_getter_literal.mjs";
import { not_equal } from "./not_equal.mjs";
import { assert_json } from "./assert_json.mjs";
export async function literals_frozen_values() {
  "What each frozen constant hands back today, read off its own file rather than kept anywhere.";
  "Read rather than stored is the whole point: one side of the comparison has to be the code itself, or the check is two copies of a record agreeing with each other while the code says something else entirely.";
  "A name here that is not a constant getter is refused rather than recorded as nothing, because an empty value would compare equal to the next empty value and freeze nothing at all - the failure would look exactly like success.";
  let names = literals_frozen_names();
  let values = {};
  for (let f_name of names) {
    let path = text_combine_multiple(["js/", f_name, ".mjs"]);
    let code = await file_read(path);
    let literal = js_code_getter_literal(code, f_name);
    let some = not_equal(literal, "");
    assert_json(some, {
      hint: "this name is frozen but is not a function that hands back one written value - would you like to take it off the frozen list or make it one?",
      f_name,
      path,
    });
    values[f_name] = literal;
  }
  return values;
}
