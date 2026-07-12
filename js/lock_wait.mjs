import { lock_generic } from "./lock_generic.mjs";
export async function lock_wait(lock_name, lambda, who) {
  let wait = true;
  let r = await lock_generic(lock_name, wait, lambda, who);
  return r;
}
