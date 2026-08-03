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
  word_from,
  word_to,
  f_name_new,
) {
  arguments_assert(arguments, 4);
  ("Pull the run of work from the first line mentioning one word through the first line mentioning another out of the named function, into a function of its own under a name you give it.");
  ("The one command for paying down the size record. Everything under it already existed - the span extractor, the selector that finds a line by a word written in it, the runner that selects one node per word - and putting them together took five positional arguments in an order nobody remembers, two of which were function names spelled as text. A debt of 130 entries is not paid by a command that has to be looked up every time.");
  ("The two ends are named by a word written somewhere in them. Line numbers would be the obvious address and they are the wrong one: they move under a peer's edit between reading the function and running the command, and they move again after the first cut.");
  ("A word rather than a call, because the line a span starts on is usually an accumulator being opened - a list or an object with nothing in it, and so no call in it either. The word may be written at any depth inside the line, which is also the only way to address a loop, whose own line begins with a word the language chose rather than one this repo did.");
  ("It refuses a name something already answers to. The extractor would write the definition anyway, and the second thing under one name is the failure that has no error - both files load, and which one a caller reaches is decided by whichever import got written.");
  let search = await function_exists(f_name_new);
  let taken = property_get(search, "exists");
  false_is_assert_json(taken, {
    hint: "a function already answers to this name, so the run would be extracted under a name that is already spoken for - pick another, or fold onto the one that is there if it is really the same work",
    f_name_new,
  });
  let ends = list_join_comma([word_from, word_to]);
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
