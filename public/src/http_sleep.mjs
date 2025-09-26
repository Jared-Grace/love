import { integer_random } from "./integer_random.mjs";
import { sleep } from "./sleep.mjs";
export async function http_sleep() {
  await sleep(integer_random(5, 8) * 1000);
}
