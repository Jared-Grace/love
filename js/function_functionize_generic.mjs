import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { function_select_multiple_apply_args } from "./function_select_multiple_apply_args.mjs";
import { function_auto_multiple } from "./function_auto_multiple.mjs";
export async function function_functionize_generic(
  f_name,
  word_from,
  word_to,
  f_name_new,
  select_fn_name,
) {
  "$plain f_name";
  "$plain word_from";
  "$plain word_to";
  "$plain f_name_new";
  "$plain select_fn_name";
  arguments_assert(arguments, 5);
  ("Pull the run of work between the first mention of one word and the first mention of another out of the named function, into a function of its own, with the caller saying which reader picks the two lines.");
  ("The whole of the cutting, held once. Two commands wrote these twenty lines out between them and differed in a single word - which of the two line readers to use - so both had to be edited to fix anything, and a fix made in one of them would have been silently missing from the other.");
  ("The two ends are named by a word written somewhere in them. Line numbers would be the obvious address and they are the wrong one: they move under a peer's edit between reading the function and running the command, and they move again after the first cut.");
  ("A word rather than a call, because the line a span starts on is usually an accumulator being opened - a list or an object with nothing in it, and so no call in it either. The word may be written at any depth inside the line, which is also the only way to address a loop, whose own line begins with a word the language chose rather than one this repo did.");
  ("It refuses a name something already answers to. The extractor would write the definition anyway, and the second thing under one name is the failure that has no error - both files load, and which one a caller reaches is decided by whichever import got written.");
  ("Which reader finds the ends is the caller's to say, and it is the only thing the two commands above this ever disagreed about. Naming it as an argument is what lets a third way of addressing a line be added later without a third copy of everything else.");
  let search = await function_exists(f_name_new);
  let taken = property_get(search, "exists");
  false_is_assert_json(taken, {
    hint: "a function already answers to this name, so the run would be extracted under a name that is already spoken for - pick another, or fold onto the one that is there if it is really the same work",
    f_name_new,
  });
  let ends = list_join_comma([word_from, word_to]);
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
