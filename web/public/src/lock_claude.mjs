import { lock_generic } from "../../../love/public/src/lock_generic.mjs";
export async function lock_claude(lock_name, wait, lambda) {
  let r = await lock_generic(lock_name, wait, lambda);
  return r;
}
