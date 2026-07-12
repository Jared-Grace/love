import { error_json } from "./error_json.mjs";
import { not } from "./not.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { sleep } from "./sleep.mjs";
export async function retry_generic(lambda, wait, wait_get, count) {
  let result = null;
  let success = false;
  async function lambda3(la) {
    async function lambda2() {
      try {
        result = await lambda();
        success = true;
        return success;
      } catch (e) {
        la(e);
        await sleep(wait);
        wait = wait_get(wait);
      }
    }
    await each_range_async(count, lambda2);
  }
  let errors = await list_adder_async(lambda3);
  if (not(success)) {
    error_json({
      errors,
    });
  }
  return result;
}
