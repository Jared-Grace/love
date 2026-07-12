import { sleep } from "./sleep.mjs";
import { multiply } from "./multiply.mjs";
export async function sleep_seconds(seconds) {
  await sleep(multiply(seconds, 1000));
}
