import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { function_select_apply_args_auto } from "./function_select_apply_args_auto.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { function_auto_multiple } from "./function_auto_multiple.mjs";
export async function function_nested_lift(f_name, nested_name, f_name_new) {
  arguments_assert(arguments, 3);
  ("Move a function written inside the named one out to stand under a name of its own. What it closed over becomes its parameters, and every call to it is handed those same things.");
  ("The twin of the span cut, for the shape the span cut cannot reach. Both pay down the same debt: a function is long either because it holds a straight run of work, which a span takes, or because it wraps a closure, which this takes. Measured over the 130 entries in the size record, the second shape is the majority.");
  ("The function inside is addressed by its own name. That is the one address that does not move: a closure keeps its name while the lines around it are edited, and the thing worth lifting is nearly always already named.");
  ("It refuses a name something already answers to, for the same reason the span cut does - two functions under one name is the failure with no error, because both files load and which one a caller reaches is decided by whichever import got written.");
  let search = await function_exists(f_name_new);
  let taken = property_get(search, "exists");
  false_is_assert_json(taken, {
    hint: "a function already answers to this name, so the one inside would be lifted out under a name that is already spoken for - pick another, or fold onto the one that is there if it is really the same work",
    f_name_new,
  });
  let select_fn_name = fn_name("js_function_nested_find_named");
  let apply_fn_name = fn_name("js_selects_function_lift");
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
