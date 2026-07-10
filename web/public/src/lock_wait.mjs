import { lock_generic } from "../../../love/public/src/lock_generic.mjs";
export async function lock_wait(lock_name, lambda) {
  let wait = true;
  let r = await lock_generic(lock_name, wait, lambda);
  return r;
}
