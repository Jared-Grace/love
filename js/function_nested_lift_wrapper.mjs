import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { function_select_apply_args_auto } from "./function_select_apply_args_auto.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { function_auto_multiple } from "./function_auto_multiple.mjs";
export async function function_nested_lift_wrapper(
  f_name,
  nested_name,
  f_name_new,
) {
  arguments_assert(arguments, 3);
  ("Move the body of a function written inside the named one out to stand under a name of its own, leaving the name behind holding one line that calls it. What it reached out for becomes its parameters, and the line left behind hands it those same things.");
  ("The one to reach for when the plain lift refuses. That one takes the name away as well as the body, so it needs every use of the name to be a call it can add arguments to; this leaves the name exactly where it was, so a function handed on as a value - a callback given to a visitor, a renderer given to a page - comes out just as easily as one that is only ever called.");
  ("The function inside is addressed by its own name, the same as the plain lift. That is the one address that does not move while the lines around it are edited.");
  ("It refuses a name something already answers to, for the same reason the other cuts do - two functions under one name is the failure with no error, because both files load and which one a caller reaches is decided by whichever import got written.");
  let search = await function_exists(f_name_new);
  let taken = property_get(search, "exists");
  false_is_assert_json(taken, {
    hint: "a function already answers to this name, so the body would be moved out under a name that is already spoken for - pick another, or fold onto the one that is there if it is really the same work",
    f_name_new,
  });
  let select_fn_name = fn_name("js_function_nested_find_named");
  let apply_fn_name = fn_name("js_selects_function_lift_wrapper");
  let output = await function_select_apply_args_auto(
    f_name,
    select_fn_name,
    nested_name,
    apply_fn_name,
    f_name_new,
  );
  let names_comma = list_join_comma([f_name, f_name_new]);
  await function_auto_multiple(names_comma);
  return output;
}
