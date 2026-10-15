import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_declaration_fixed_call } from "./js_declaration_fixed_call.mjs";
export async function functions_fixed_call_twins() {
  arguments_assert(arguments, 0);
  ("Every granted function that only calls another function with its inputs written in, each as one line of words: the granted name, then the call it stands for. For the bash guard, which can then answer a prompt for the call with the granted name.");
  ("★ FOUND FROM THE GRANTS, NOT LISTED. The guard's other twin pairs are hand-written because python cannot read which function wraps which; this side can, so a new wrapper is found the moment it is granted, and one that stops being a plain pass-through drops out by itself.");
  ("One line of words rather than a pair because the mirror carries a set of text, and a word here can hold no space by construction - a name cannot, and an input has to be a plain word to count at all.");
  let twins = [];
  for (let name of permission_grant_names()) {
    let parsed = await function_parse_declaration(name);
    let fixed = js_declaration_fixed_call(parsed.declaration);
    if (not_equal(fixed, null)) {
      let v = [name, fixed.fn, ...fixed.args].join(" ");
      twins.push(v);
    }
  }
  return twins;
}
