import { add_curried } from "./add_curried.mjs";
import { retry_generic } from "./retry_generic.mjs";
import { divide } from "./divide.mjs";
export async function retry_fast(lambda) {
  let interval = 100;
  let timeout = 5000;
  let count = divide(timeout, interval);
  let wait_get = add_curried(interval);
  let result = await retry_generic(lambda, interval, wait_get, count);
  return result;
}
