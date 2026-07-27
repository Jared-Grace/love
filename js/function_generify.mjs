import { arguments_assert } from "./arguments_assert.mjs";
import { js_select_apply } from "./js_select_apply.mjs";
import { js_string_literal_single_find } from "./js_string_literal_single_find.mjs";
import { js_literal_hoist } from "./js_literal_hoist.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_local_to_param } from "./function_local_to_param.mjs";
export async function function_generify(f_name, name) {
  "Makes a function general in one step: the one value it had written into it is given the name you choose, and that name becomes a parameter its callers fill in.";
  "Two things had to happen in order and neither is interesting on its own - a value has to be named before it can be handed over, and every caller has to keep passing the value it always had. Doing them by hand means remembering the order and the second half; asking for it by name means the function is either general or untouched, with nothing in between to get wrong.";
  "Nothing about the meaning changes. Every caller is handed the very value that was written in, so this is worth running before anyone has decided what the other value will be - and the point of running it then is that the second value costs a copy afterwards instead of a rewrite.";
  "It refuses a function using no strings, or more than one, because then which value was meant is a question and this cannot answer it.";
  arguments_assert(arguments, 2);
  async function hoisted(ast) {
    let select_args = [];
    let apply_args = [name];
    await js_select_apply(
      ast,
      js_string_literal_single_find,
      select_args,
      js_literal_hoist,
      apply_args,
    );
  }
  await function_transform(f_name, hoisted);
  await function_local_to_param(f_name, name);
}
