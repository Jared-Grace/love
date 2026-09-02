import { sleep } from "./sleep.mjs";
import { multiply } from "./multiply.mjs";
export async function sleep_seconds(seconds) {
  "Waits for a number of seconds, saying the wait in the unit a person thinks in rather than in milliseconds.";
  let ms = multiply(seconds, 1000);
  await sleep(ms);
}
