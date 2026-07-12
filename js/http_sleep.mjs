import { sleep_seconds } from "./sleep_seconds.mjs";
import { integer_random } from "./integer_random.mjs";
export async function http_sleep() {
  let seconds = integer_random(5, 8);
  await sleep_seconds(seconds);
}
