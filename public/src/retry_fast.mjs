import { retry_generic } from "../../../love/public/src/retry_generic.mjs";
export async function retry_fast(lambda) {
  let wait = 100;
  let timeout = 5000;
  let result = await retry_generic(lambda, wait, wait_get, 50);
  return result;
  function wait_get(wait) {
    wait += 100;
  }
}
