import { add_curried } from "../../../love/public/src/add_curried.mjs";
import { retry_generic } from "../../../love/public/src/retry_generic.mjs";
export async function retry_fast(lambda) {
  let interval = 100;
  let timeout = 5000;
  let count = timeout / interval;
  let wait_get = add_curried(interval);
  let result = await retry_generic(lambda, interval, wait_get, count);
  return result;
}
