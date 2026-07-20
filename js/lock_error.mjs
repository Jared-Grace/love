import { lock_try } from "./lock_try.mjs";
import { not } from "./not.mjs";
import { error } from "./error.mjs";
export async function lock_error(lock_name, lambda, who, message) {
  ("if the lock is already held, then throws ", message, " instead of running ", lambda);
  let ran = false;
  async function lambda_ran() {
    ran = true;
    let r2 = await lambda();
    return r2;
  }
  let r = await lock_try(lock_name, lambda_ran, who);
  if (not(ran)) {
    error(message);
  }
  return r;
}
