import { arguments_assert } from "./arguments_assert.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
export async function firebase_prod_asset_disk_write(file_name, text) {
  "$plain file_name";
  "$plain text";
  "Puts one piece of a page into the folder that gets sent, under the short name it is served by.";
  "The other way round from its twin next door, which reads one piece out of that same folder, and working out where the folder is is the one line they share - so the two cannot drift into disagreeing about which folder is the one that goes live.";
  "Straight onto the disk rather than through the remembering, because whoever asks for this is about to have the folder read back by something that never went through the remembering at all - the check that says what is waiting to be sent, and the sending itself.";
  arguments_assert(arguments, 2);
  let relative = folder_public_join(file_name);
  let combined = await user_repo_path_combine(relative);
  await file_overwrite_uncached(combined, text);
}
