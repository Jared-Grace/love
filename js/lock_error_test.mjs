import { lock_error } from "./lock_error.mjs";
import { lock_wait } from "./lock_wait.mjs";
import { error } from "./error.mjs";
import { equal_assert } from "./equal_assert.mjs";
export async function lock_error_test() {
  ("holds the lock, then checks that ", lock_error, " refuses to run inside it");
  let message = "already running";
  async function lambda_inner() {
    error("lambda ran while the lock was held");
  }
  async function lambda_held() {
    let r2 = "no error was thrown";
    try {
      await lock_error(
        lock_error_test.name,
        lambda_inner,
        lock_error_test.name,
        message,
      );
    } catch (e) {
      r2 = e.message;
    }
    return r2;
  }
  let r = await lock_wait(lock_error_test.name, lambda_held, lock_error_test.name);
  equal_assert(r, message);
  return r;
}
