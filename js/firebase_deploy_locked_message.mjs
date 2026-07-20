import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { lock_force_release } from "./lock_force_release.mjs";
export function firebase_deploy_locked_message() {
  let r = text_combine_multiple([
    "A firebase deploy is already running on this machine, so this one stopped instead of overwriting it",
    "\nWould you like to wait for that deploy to finish, then run this one again?",
    "\nIf you are sure the other deploy is gone, you can clear its lock with: node scripts/r.mjs ",
    lock_force_release.name,
    " ",
    fn_name("firebase_deploy"),
  ]);
  return r;
}
