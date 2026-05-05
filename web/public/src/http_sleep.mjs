import { integer_random } from "../../../love/public/src/integer_random.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
export async function http_sleep() {
  const seconds = integer_random(5, 8);
  await sleep(seconds * 1000);
}
