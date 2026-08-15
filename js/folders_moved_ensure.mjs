import { folders_moved_expected } from "./folders_moved_expected.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { folder_moved_ensure } from "./folder_moved_ensure.mjs";
export async function folders_moved_ensure() {
  "Makes the folders on disk match where the code says they belong, and answers what it did.";
  "Nothing runs this on a schedule. It is run by hand after a folder has been given a new name in the function that names it, and it is safe to run at any other moment, because a folder already in place is answered as a quiet no.";
  "What it answers is one line per folder saying where it came from, where it went, and whether it moved at all. A move that prints nothing looks the same whether it did everything or nothing, and those are the two answers that must never be confused.";
  let expected = folders_moved_expected();
  let ensured = await list_map_async(expected, lambda);
  return ensured;
  async function lambda(pair) {
    let before = property_get(pair, "before");
    let after = property_get(pair, "after");
    let one = await folder_moved_ensure(before, after);
    return one;
  }
}
