import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { function_select_multiple_apply_args } from "./function_select_multiple_apply_args.mjs";
import { function_auto_multiple } from "./function_auto_multiple.mjs";
export async function function_functionize(
  f_name,
  call_from,
  call_to,
  f_name_new,
) {
  arguments_assert(arguments, 4);
  ("Pull the run of work from the line calling one function through the line calling another out of the named function, into a function of its own under a name you give it.");
  ("The one command for paying down the size record. Everything under it already existed - the span extractor, the selector that finds a statement by the call in it, the runner that selects one node per word - and putting them together took five positional arguments in an order nobody remembers, two of which were function names spelled as text. A debt of 130 entries is not paid by a command that has to be looked up every time.");
  ("The two ends are named by the calls standing on them, because a call is the one thing in a line that is already a name. Line numbers would be the obvious address and they are the wrong one: they move under a peer's edit between reading the function and running the command, and they move again after the first cut.");
  ("The call may be written anywhere inside the line, at any depth. A loop is then addressable by any name called in it, which is the only way to address one at all - a loop's own line begins with a word the language chose. Reaching for the nearest line instead named a line inside the loop, and a span whose two ends sit in different blocks is refused, so every cut that ended in a loop failed. The long functions are long with loops.");
  ("It refuses a name something already answers to. The extractor would write the definition anyway, and the second thing under one name is the failure that has no error - both files load, and which one a caller reaches is decided by whichever import got written.");
  let search = await function_exists(f_name_new);
  let taken = property_get(search, "exists");
  false_is_assert_json(taken, {
    hint: "a function already answers to this name, so the run would be extracted under a name that is already spoken for - pick another, or fold onto the one that is there if it is really the same work",
    f_name_new,
  });
  let ends = list_join_comma([call_from, call_to]);
  let select_fn_name = fn_name("js_statement_find_name_body");
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
