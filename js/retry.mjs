import { double } from "./double.mjs";
import { retry_generic } from "./retry_generic.mjs";
export async function retry(count, lambda) {
  "each wait is twice the one before it, so a service that is briefly overloaded is asked again less and less often rather than being hammered at a fixed rate. it must be said as a value handed back - the caller stores what this answers, so a version that only changed its own parameter left the next wait undefined, and an undefined wait is no wait at all";
  let wait = 1000;
  let wait_get = double;
  let result = await retry_generic(lambda, wait, wait_get, count);
  return result;
}
