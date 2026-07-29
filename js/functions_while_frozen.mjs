import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { equal } from "./equal.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { js_code_while_frozen_conditions } from "./js_code_while_frozen_conditions.mjs";
import { file_read } from "./file_read.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { greater_than } from "./greater_than.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function functions_while_frozen() {
  "Every function holding a loop that can never stop, with the conditions it waits forever on";
  "The repo's ordinary tidying lifts a piece of an expression out into a name above it, which changes nothing anywhere except here: a loop asks its condition once each time round, so lifting it out takes the answer before the work that would have changed it and then waits on that answer forever. Nothing about the code looks wrong, and the only sign is that something never comes back";
  "This has happened here once. It landed in a fold and hung the gate corpus, so every Claude's whole gate run stopped returning at once, runs piled up until the machine was at full load, and it read as the gates having got slow rather than as one of them never finishing. Finding it took timing every gate and then every example; the repair was one line";
  let paths = await functions_names_to_paths();
  let f_names = Object.keys(paths);
  let unreadable = [];
  async function measure(f_name) {
    let f_path = property_get(paths, f_name);
    async function read() {
      let code = await file_read(f_path);
      let frozen_inner = js_code_while_frozen_conditions(code);
      return frozen_inner;
    }
    ("A file that will not parse is not an answer to this question and must not be");
    ("allowed to become one. It is skipped rather than counted, because a torn or");
    ("half-written file says nothing about how anybody wrote their loops");
    ("What is skipped is counted and said out loud, because a swallowed failure and a");
    ("clean sweep leave exactly the same empty list. A sister reader threw on its very");
    ("first name and every one of the eighteen hundred files was quietly skipped -");
    ("which read as a repo with nothing wrong in it, the most reassuring possible");
    ("shape for a total failure to wear");
    let frozen = await catch_null_async(read);
    let skipped_is = equal(frozen, null);
    if (skipped_is) {
      list_add(unreadable, f_name);
    }
    let told = {
      f_name,
      frozen: frozen ? frozen : [],
    };
    return told;
  }
  let measured = await list_map_unordered_async(f_names, measure);
  let unread = list_size(unreadable);
  let any_unread = greater_than(unread, 0);
  if (any_unread) {
    let joined = list_join_comma(unreadable);
    console.log(
      "UNREADABLE  " + unread + " of " + f_names.length + "  " + joined,
    );
  }
  function any_lambda(m) {
    let frozen = property_get(m, "frozen");
    let any = greater_than(frozen.length, 0);
    return any;
  }
  let offenders = list_filter(measured, any_lambda);
  return offenders;
}
