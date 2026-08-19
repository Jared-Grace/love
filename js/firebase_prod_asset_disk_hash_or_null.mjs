import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read } from "./file_read.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { not } from "./not.mjs";
import { text_hash } from "./text_hash.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
export async function firebase_prod_asset_disk_hash_or_null(file_name) {
  "$plain file_name";
  "One short word standing for the piece of a page waiting in the folder that gets sent under that name, and nothing at all where no such piece is waiting.";
  "Nothing rather than a refusal, because the caller is comparing what is waiting against what is being served and an absent piece is one of the ordinary answers to that - a page can pick up a piece its last build never had. Refused instead, the one file nobody put there would end the whole comparison, and the comparison is the thing being asked for.";
  "Its neighbour asks the same question of a whole page at once and refuses on an absent piece, which is right for a page that has been built and is being described. This is for the other case, where what is on the disk is what is in doubt.";
  arguments_assert(arguments, 1);
  let relative = folder_public_join(file_name);
  let combined = await user_repo_path_combine(relative);
  let there = await file_exists(combined);
  let absent = not(there);
  if (absent) {
    return null;
  }
  let text = await file_read(combined);
  let hash = text_hash(text);
  return hash;
}
