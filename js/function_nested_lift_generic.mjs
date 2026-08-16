import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { function_select_apply_args_auto } from "./function_select_apply_args_auto.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { function_auto_multiple } from "./function_auto_multiple.mjs";
export async function function_nested_lift_generic(
  f_name,
  nested_name,
  f_name_new,
  select_fn_name,
  apply_fn_name,
) {
  arguments_assert(arguments, 5);
  ("Move a function written inside the named one out to stand under a name of its own, by whichever way of finding it and whichever way of moving it are handed in.");
  ("Two moves make this cut and they differ in exactly two names: one takes the name away with the body and rewrites every call, the other leaves the name behind on a line that calls the moved body. Everything around those two names was written twice - the same refusal of a name already spoken for, the same handing over to the shared select-and-apply, the same tidying of both files afterwards - and written twice it can be improved on one side only, which is the way a shared ending fails.");
  ("It refuses a name something already answers to, whichever move is being made, for the same reason every cut here does - two functions under one name is the failure with no error, because both files load and which one a caller reaches is decided by whichever import got written.");
  ("Both files are tidied rather than only the new one. The one left behind has just gained an import and, in one of the two moves, a whole new line, so a run that tidied only what it created would record a file that no longer loads.");
  let search = await function_exists(f_name_new);
  let taken = property_get(search, "exists");
  false_is_assert_json(taken, {
    hint: "a function already answers to this name, so the one inside would be moved out under a name that is already spoken for - pick another, or fold onto the one that is there if it is really the same work",
    f_name_new,
  });
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
