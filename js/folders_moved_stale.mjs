import { folders_moved_expected } from "./folders_moved_expected.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { folder_moved_stale } from "./folder_moved_stale.mjs";
export async function folders_moved_stale() {
  "Asks, for every folder that has been given a new home, what still names the old one - and answers nothing at all when the move is finished.";
  "This is the list to read before a move and again after it. Before, it says how much of the move is by hand; after, an empty answer is what says the move is actually done, rather than done in the places somebody happened to remember.";
  "It reads and asks and changes nothing, so it is safe to run at any moment, including while the move is half finished.";
  let expected = folders_moved_expected();
  let stale = await list_map_async(expected, lambda);
  return stale;
  async function lambda(pair) {
    let before = property_get(pair, "before");
    let one = await folder_moved_stale(before);
    return one;
  }
}
