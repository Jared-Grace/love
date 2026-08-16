import { arguments_assert } from "./arguments_assert.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_auto_multiple } from "./function_auto_multiple.mjs";
import { function_exists } from "./function_exists.mjs";
import { function_select_apply_args } from "./function_select_apply_args.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { property_get } from "./property_get.mjs";
export async function function_functionize_through(
  f_name,
  name_from,
  name_to,
  f_name_new,
) {
  arguments_assert(arguments, 4);
  ("Pull the run of lines from where one name is introduced through the last line that mentions another out of the named function, into a function of its own - both ends taken at the top level of whichever function they stand inside.");
  ("The cut a run of paint actually wants. Its three neighbours name both ends the same way, by the earliest mention, and that reaches the opening line of a run and almost never the closing one: paint opens by naming something and closes by spending it, so every word on its last line was first written further up. Measured on 2026-08-17, a screen's grid of chapter buttons, its title and its hint were each unreachable for exactly that reason - each of the three ended on a line whose every word pointed above it.");
  ("So the two ends are read differently on purpose: where the name is introduced, and where the other name is last spoken of. Both are still names rather than numbers, for the reason the neighbours give - a line number moves under a peer's edit between reading the function and running the command, and moves again after the first cut.");
  ("It refuses a name something already answers to, the same as its neighbours, because the extractor would write the definition anyway and a second thing under one name is the failure with no error.");
  let search = await function_exists(f_name_new);
  let taken = property_get(search, "exists");
  false_is_assert_json(taken, {
    hint: "a function already answers to this name, so the run would be extracted under a name that is already spoken for - pick another, or fold onto the one that is there if it is really the same work",
    f_name_new,
  });
  let select_fn_name = fn_name("js_statement_find_name_holder");
  let apply_fn_name = fn_name("js_selects_functionize_through");
  let apply_args_comma = list_join_comma([name_to, f_name_new]);
  let output = await function_select_apply_args(
    f_name,
    select_fn_name,
    name_from,
    apply_fn_name,
    apply_args_comma,
  );
  let names_comma = list_join_comma([f_name, f_name_new]);
  await function_auto_multiple(names_comma);
  return output;
}
