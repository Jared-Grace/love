import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function firebase_deploy_locked_message() {
  "What somebody is told when a deploy stopped because another was already running, including how to clear the lock if that other one is gone.";
  let f_name = fn_name("lock_force_release");
  let f_name2 = fn_name("firebase_deploy");
  let r = text_combine_multiple([
    "A firebase deploy is already running on this machine, so this one stopped instead of overwriting it",
    "\nWould you like to wait for that deploy to finish, then run this one again?",
    "\nIf you are sure the other deploy is gone, you can clear its lock with: node scripts/r.mjs ",
    f_name,
    " ",
    f_name2,
  ]);
  return r;
}
