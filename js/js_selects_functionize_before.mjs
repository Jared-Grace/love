import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { property_get } from "./property_get.mjs";
import { js_selects_functionize_range } from "./js_selects_functionize_range.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than_equal_assert_json } from "./greater_than_equal_assert_json.mjs";
import { js_functionize } from "./js_functionize.mjs";
import { subtract_1 } from "./subtract_1.mjs";
export async function js_selects_functionize_before(ast, selects, f_name_new) {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 3);
  ("Pulls everything from the first chosen statement up to the line before the second one out into a function of its own, so the second choice marks where the run stops rather than the last line in it.");
  ("The twin of the cut that takes both chosen lines, and the difference is one number. It is worth a whole verb because of what a block of work actually looks like here: it opens on a name of its own and closes on a call that reuses names introduced further up, so its last line usually carries no name that is written there for the first time and cannot be pointed at. The line after it almost always can - a new block opens by naming something new - so a run that had no address at all gains one by being asked for as everything before the next block begins.");
  ("It refuses a second choice that is not below the first. Cutting from a line up to before itself is an empty run, and the extractor would go on to write a function with nothing in it and a call to it where the work used to be.");
  let r = js_selects_functionize_range(selects, ast);
  let index_to = property_get(r, "index_to");
  let index_from = property_get(r, "index_from");
  let body_from = property_get(r, "body_from");
  let index_last = subtract_1(index_to);
  greater_than_equal_assert_json(index_last, index_from, {
    hint: "the second name has to stand on a line below the first, because the run being cut is everything from the first line up to just before the second one. Would you like to check that the two names are the right way round?",
    f_name_new,
  });
  await js_functionize(ast, f_name_new, body_from, index_from, index_last);
}
