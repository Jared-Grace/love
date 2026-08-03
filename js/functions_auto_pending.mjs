import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { equal } from "./equal.mjs";
import { function_auto_pending_is } from "./function_auto_pending_is.mjs";
import { functions_names } from "./functions_names.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_auto_pending() {
  "Every function the canonicalizing pass would still change - the ones somebody edited without running the pass afterwards.";
  "This is the general form of the raw-operator sweep beside it, and it subsumes it: operators written as symbols are one of the things the pass fixes, and this asks about all of them at once by running the pass rather than by naming the shapes.";
  "Why it matters is not tidiness. Every gate that reads a body reads the shape the pass leaves, so a function the pass has never run over is compared against nothing - the fold sees no site, the duplicate sweeps see no twin. One un-run function hides every copy of itself, and it hides it silently.";
  "A function the pipeline cannot process is counted as skipped rather than as an answer, and the number is said out loud. A reader that throws on its first name would otherwise have every function quietly skipped, which reads as a repo with nothing wrong in it - the most reassuring shape a total failure can wear.";
  arguments_assert(arguments, 0);
  let f_names = await functions_names();
  let unreadable = [];
  async function measure(f_name) {
    async function ask() {
      let pending_inner = await function_auto_pending_is(f_name);
      return pending_inner;
    }
    let pending = await catch_null_async(ask);
    let skipped_is = equal(pending, null);
    if (skipped_is) {
      list_add(unreadable, f_name);
    }
    let told = {
      f_name,
      pending: pending ? true : false,
    };
    return told;
  }
  let measured = await list_map_unordered_async(f_names, measure);
  let combined = text_combine_multiple([
    "looked at ",
    f_names.length,
    " functions",
  ]);
  console.log(combined);
  let unread = list_size(unreadable);
  let any_unread = greater_than(unread, 0);
  if (any_unread) {
    let joined = list_join_comma(unreadable);
    let combined2 = text_combine_multiple([
      "UNPROCESSABLE  ",
      unread,
      " of ",
      f_names.length,
      "  ",
      joined,
    ]);
    console.log(combined2);
  }
  let names = [];
  for (let one of measured) {
    if (one.pending) {
      list_add(names, one.f_name);
    }
  }
  return names;
}
