import { retry_generic } from "../../../love/public/src/retry_generic.mjs";
export async function retry(count, lambda) {
  let wait = 1000;
  let result = await retry_generic(lambda, wait, wait_get, count);
  return result;
  function wait_get(wait) {
    wait *= 2;
  }
}
