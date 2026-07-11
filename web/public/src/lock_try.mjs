import { lock_generic } from "../../../love/public/src/lock_generic.mjs";
export async function lock_try(lock_name, lambda, who) {
  ("if the lock is already locked, then does not run ", lambda);
  let wait = false;
  let r = await lock_generic(lock_name, wait, lambda, who);
  return r;
}
