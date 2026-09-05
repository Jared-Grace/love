import { folders_moved_expected } from "./folders_moved_expected.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { error_json } from "./error_json.mjs";
import { property_get } from "./property_get.mjs";
import { folder_moved_ensure_try } from "./folder_moved_ensure_try.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function folders_moved_ensure() {
  "Makes the folders on disk match where the code says they belong, and answers what it did.";
  "Nothing runs this on a schedule. It is run by hand after a folder has been given a new name in the function that names it, and it is safe to run at any other moment, because a folder already in place is answered as a quiet no.";
  "What it answers is one line per folder saying where it came from, where it went, and whether it moved at all. A move that prints nothing looks the same whether it did everything or nothing, and those are the two answers that must never be confused.";
  "ONE FOLDER THAT WILL NOT MOVE NO LONGER STOPS THE ONES BEHIND IT. The list is walked in order and a refusal used to be raised where it happened, so every folder written down after the refused one was never even looked at. That turned a single stale destination into a quiet off switch for the whole migration, and the way it showed was a folder registered weeks earlier sitting exactly where it had always been, with nothing anywhere saying why. Each folder is tried on its own now.";
  "It still refuses at the end rather than answering quietly, because a folder left where it was is the whole failure this exists to prevent, and one that is reported and not read is left there just the same. What is raised carries the entire reading - what moved as well as what would not - so the single run says both, and the refusals are read together rather than one per run.";
  let expected = folders_moved_expected();
  let ensured = await list_map_async(expected, lambda);
  let refused = list_filter(ensured, was_refused);
  let any = list_empty_not_is(refused);
  if (any) {
    error_json({
      ensured,
      refused,
    });
  }
  return ensured;
  async function lambda(pair) {
    let before = property_get(pair, "before");
    let after = property_get(pair, "after");
    let one = await folder_moved_ensure_try(before, after);
    return one;
  }
  function was_refused(one) {
    let said = property_get(one, "refused");
    let broke = null_not_is(said);
    return broke;
  }
}
