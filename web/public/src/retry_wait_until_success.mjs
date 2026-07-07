import { equal } from "../../../love/public/src/equal.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
export async function retry_wait_until_success(lambda) {
  let r = null;
  while (true) {
    try {
      r = await lambda();
      await sleep(200);
      break;
    } catch (e) {}
    if (equal(i, 30)) {
      break;
    }
  }
  return r;
}
