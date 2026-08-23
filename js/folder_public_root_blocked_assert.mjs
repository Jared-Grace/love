import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json } from "./assert_json.mjs";
import { folder_public_root_hold } from "./folder_public_root_hold.mjs";
import { folder_public_root_is } from "./folder_public_root_is.mjs";
import { folder_public_root_lock_name } from "./folder_public_root_lock_name.mjs";
import { lock_held_is } from "./lock_held_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function folder_public_root_blocked_assert(file_path) {
  "$plain file_path";
  "Refuses to let this run change a file at the top of the published folder while somebody else is copying into it or sending it out";
  "Promoting and sending both take a block over that folder, and until now that block only held the two of them apart. Anything else writing there - a build pointed at the wrong stage, a hand-made edit, a restore - walked straight past it, and a sending already under way would carry half of whatever had just been written. A promise kept only by the two runs that know about it is not a promise about the folder.";
  "Asked of the path rather than of the caller, because the callers are every way there is to change a file and they cannot each be trusted to remember. Put where a file is actually changed, forgetting is not possible.";
  "Nothing outside the top of that folder is even asked about, and that is what makes this free to run on every write in the repo. Working out which folder a path sits in costs no reading at all, and only a path that lands in the one folder that matters ever goes on to ask the disk whether the block is held.";
  "A run holding the block itself is let through, because it is the one the block was taken out for. Without that the copying would be refused by its own protection.";
  arguments_assert(arguments, 1);
  let root = folder_public_root_is(file_path);
  if (not(root)) {
    return;
  }
  let hold = folder_public_root_hold();
  let mine = property_get(hold, "held");
  if (mine) {
    return;
  }
  let lock_name = folder_public_root_lock_name();
  let held = await lock_held_is(lock_name);
  let b = not(held);
  assert_json(b, {
    file_path,
    lock_name,
  });
}
