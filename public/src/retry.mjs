import { log } from "./log.mjs";
import { each_range_async } from "./each_range_async.mjs";
import { error } from "./error.mjs";
export async function retry(lambda) {
  let count = 5;
  let wait = 1000;
  let result = null;
  let success = false;
  async function lambda2() {
    try {
      result = await lambda();
      success = true;
      return success;
    } catch (e) {
      log(message);
    }
  }
  await each_range_async(count, lambda2);
  if (success) {
    return result;
  }
  error();
}
