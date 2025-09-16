import { sleep } from "./sleep.mjs";
import { error_json } from "./error_json.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { log } from "./log.mjs";
import { each_range_async } from "./each_range_async.mjs";
export async function retry(count, lambda) {
  let wait = 1000;
  let result = null;
  let success = false;
  async function lambda3(la) {
    async function lambda2() {
      try {
        result = await lambda();
        success = true;
        return success;
      } catch (e) {
        log(message);
        la(e);
        await sleep(wait);
        wait *= 2;
      }
    }
    await each_range_async(count, lambda2);
  }
  let errors = await list_adder_async(lambda3);
  if (success) {
    return result;
  }
  error_json({
    errors,
  });
}
