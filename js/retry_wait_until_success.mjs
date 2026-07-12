import { sleep } from "./sleep.mjs";
export async function retry_wait_until_success(lambda) {
  let r = null;
  while (true) {
    try {
      r = await lambda();
      break;
    } catch (e) {
      await sleep(200);
    }
  }
  return r;
}
