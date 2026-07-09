import { sleep } from "../../../love/public/src/sleep.mjs";
import { multiply } from "../../../love/public/src/multiply.mjs";
export async function sleep_seconds(seconds) {
  await sleep(multiply(seconds, 1000));
}
