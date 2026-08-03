import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { function_select_multiple_apply_args } from "./function_select_multiple_apply_args.mjs";
import { function_auto_multiple } from "./function_auto_multiple.mjs";
export async function function_functionize_inner(
  f_name,
  word_from,
  word_to,
  f_name_new,
) {
  arguments_assert(arguments, 4);
  ("Pull the run of lines from the first mention of one word through the first mention of another out of the named function, into a function of its own - the two ends taken where the words are actually written, however deep inside a loop or a branch that is.");
  ("The twin of the cut that climbs to the top of the body, and between them they reach all three shapes a long function comes in. Straight work at the top of a body is the climbing twin's; a closure is the lifting command's; work folded inside a loop is this one's, and before it that third shape could be reached by neither - a loop is not a closure, and climbing out of it addresses the loop whole, which only wraps the size up again.");
  ("Both ends must stand in the same block, which for this one is the ordinary case rather than a hurdle: the lines worth cutting out of a loop are the loop's own contents, side by side.");
  let search = await function_exists(f_name_new);
  let taken = property_get(search, "exists");
  false_is_assert_json(taken, {
    hint: "a function already answers to this name, so the run would be extracted under a name that is already spoken for - pick another, or fold onto the one that is there if it is really the same work",
    f_name_new,
  });
  let ends = list_join_comma([word_from, word_to]);
  let select_fn_name = fn_name("js_statement_find_name_inner");
  let apply_fn_name = fn_name("js_selects_functionize");
  let output = await function_select_multiple_apply_args(
    f_name,
    select_fn_name,
    ends,
    apply_fn_name,
    f_name_new,
  );
  let names_comma = list_join_comma([f_name, f_name_new]);
  await function_auto_multiple(names_comma);
  return output;
}
