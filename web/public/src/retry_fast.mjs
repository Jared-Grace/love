import { add_curried } from "../../../love/public/src/add_curried.mjs";
import { retry_generic } from "../../../love/public/src/retry_generic.mjs";
export async function retry_fast(lambda) {
  let interval = 100;
  let timeout = 5000;
  let count = timeout / interval;
  let r2 = add_curried(right);
  let result = await retry_generic(lambda, interval, wait_get, count);
  return result;
  function wait_get(wait) {
    let r = wait + interval;
    return r;
  }
}
