import { error_json } from "../../../love/public/src/error_json.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { each_range_async } from "../../../love/public/src/each_range_async.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
import { retry } from "../../../love/public/src/retry.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
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
        log_keep(retry_generic.name, {
          e,
        });
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
