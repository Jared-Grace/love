import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_deploy_locked_message } from "./firebase_deploy_locked_message.mjs";
import { fn_name } from "./fn_name.mjs";
import { lock_error } from "./lock_error.mjs";
export async function firebase_deploy_locked_generic(lambda, f_name) {
  "Runs one way of sending while no other sending on this machine is under way, and says so gently instead of running it when one already is.";
  "Every way of sending shares the one lock, and it is named after the sending rather than after any of the ways to reach it. That is the whole of why they hold each other off: two ways named differently would each take a lock nobody else wanted and both walk the same folder at once.";
  "Which way came is worth telling whoever is turned away, so the name is received rather than found here. Found here it would always be this function's own name, which names nothing anybody chose to run.";
  arguments_assert(arguments, 2);
  let message = firebase_deploy_locked_message();
  let lock_name = fn_name("firebase_deploy");
  let r = await lock_error(lock_name, lambda, f_name, message);
  return r;
}
