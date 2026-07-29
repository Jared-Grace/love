import { js_function_declaration_params_get } from "./js_function_declaration_params_get.mjs";
import { not } from "./not.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_calls_imported_sizes } from "./js_calls_imported_sizes.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_arity_mismatches() {
  "Every call in this repo that hands a repo function a different number of things than it declares.";
  "Nothing here can catch this today, and the rule that makes it catchable is one this repo already keeps: no parameter is optional, defaulted, or variadic, so the declared count is the only right count and any other is a mistake. Elsewhere that question has no answer, which is why it is worth asking here.";
  "The two ways it goes wrong are not alike. Too few and the missing parameter is undefined, which reads as a value right up until something asks it to behave like one - a list handed one argument pushes onto whatever the caller passed first. Too many and the extra is dropped without a word, so a message a caller believed it was giving is simply never given.";
  "One sweep, not two: the same parse answers what a function declares and what it calls, and reading every file twice to ask two questions about it would cost twice for nothing.";
  let love = await repo_functions_names("love");
  let declared = {};
  let calling = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let declaration = property_get(parsed, "declaration");
    let params = js_function_declaration_params_get(declaration);
    let value = list_size(params);
    property_set(declared, name, value);
    let ast = property_get(parsed, "ast");
    let calls = js_calls_imported_sizes(ast);
    let entry = {
      name,
      calls,
    };
    list_add(calling, entry);
  }
  let offenders = [];
  function caller_each(entry) {
    let caller = property_get(entry, "name");
    let calls = property_get(entry, "calls");
    function call_each(call) {
      let callee = property_get(call, "name");
      let known = property_exists(declared, callee);
      if (not(known)) {
        return;
      }
      let want = property_get(declared, callee);
      let got = property_get(call, "size");
      let agrees = equal(want, got);
      if (agrees) {
        return;
      }
      let offence = text_combine_multiple([
        caller,
        " calls ",
        callee,
        " with ",
        got,
        " of ",
        want,
      ]);
      list_add(offenders, offence);
    }
    each(calls, call_each);
  }
  each(calling, caller_each);
  return offenders;
}
