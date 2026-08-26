import { ebible_versions_published_commercial_not } from "./ebible_versions_published_commercial_not.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { ebible_version_storage_delete } from "./ebible_version_storage_delete.mjs";
export async function ebible_versions_published_commercial_not_storage_delete() {
  "Takes down every translation storage is publishing that this repo is not free to publish, and answers with what each one had and what is left of it.";
  "It finds its own set rather than taking a list. A list typed by hand is a reading of the shelf made at the moment somebody looked, and the reason for removing these is that they should never have been up there - so the set has to be asked again at the moment of removing, or a text uploaded since the last look survives a sweep that reported success.";
  "One after another rather than all at once. Each of these is tens of thousands of files and the remover underneath already works several at a time, so starting ten of them together buys nothing and makes a failure in the middle hard to read.";
  "Every folder goes through the single remover, which refuses a translation the repo is free to ship before it touches anything. So the terms are read once per folder here as well as once when the set was found, and the sweep cannot remove a text merely because the list it was handed said so.";
  let bible_folders = await ebible_versions_published_commercial_not();
  let removals = await list_map_async(
    bible_folders,
    ebible_version_storage_delete,
  );
  return removals;
}
