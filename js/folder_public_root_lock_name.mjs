import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function folder_public_root_lock_name() {
  "The name of the one block held over the top of the folder that goes out";
  "Everything that copies into that folder and everything that sends it out takes this one, which is the whole of why they hold each other off. Two of them naming different blocks would each take one nobody else wanted and both walk the same folder at once.";
  "It is named after the sending rather than after the folder, and the name is left alone deliberately. Renaming it would mean a moment where a run started before the change and a run started after it were holding two different blocks and neither could see the other - and what the block protects is exactly the folder those two would both be writing. The word is only ever compared against itself, so what it says matters less than that every run says the same thing.";
  arguments_assert(arguments, 0);
  let lock_name = fn_name("firebase_deploy");
  return lock_name;
}
