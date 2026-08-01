import { error_readable } from "./error_readable.mjs";
import { error_json } from "./error_json.mjs";
import { not } from "./not.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { sleep } from "./sleep.mjs";
export async function retry_generic(lambda, wait, wait_get, count) {
  "Asks for something again and again while it keeps failing, and if it never succeeds, complains with every reason it was given";
  "What each attempt said is kept as words rather than as the error itself. An error written down as json is an empty pair of brackets, so the complaint this raises after the last attempt used to be a row of empty brackets - the exact shape of a retrier that had nothing to report, arriving at the one moment when why it failed is the only thing worth knowing";
  let result = null;
  let success = false;
  async function lambda3(la) {
    async function lambda2() {
      try {
        result = await lambda();
        success = true;
        return success;
      } catch (e) {
        let words = error_readable(e);
        la(words);
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
